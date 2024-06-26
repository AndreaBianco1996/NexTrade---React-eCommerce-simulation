import { Icon } from "@iconify/react/dist/iconify.js";
import { useSearchParams } from "react-router-dom";

function ProductCategories({ category }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const thereAreCategories = searchParams.getAll("category").includes(category);

  function handleFilter(e) {
    const isChecked = e.target.checked;
    const value = e.target.value;
    if (isChecked) {
      setSearchParams((prev) => {
        prev.append("category", value);
        return prev;
      });
    } else {
      setSearchParams((prev) => {
        prev.delete("category", value);
        return prev;
      });
    }
  }

  return (
    <div className="mb-2.5 flex items-center gap-2">
      <span className="relative flex items-center">
        <input
          type="checkbox"
          id={category + "ID"}
          name="category"
          value={category}
          onChange={handleFilter}
          checked={thereAreCategories}
          className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-[5px] border border-gray-300 checked:border-violet-500"
        />
        <Icon
          icon="ph:check-bold"
          width="14"
          height="14"
          className="absolute bottom-0 left-0 right-0 top-0 -z-10 m-auto hidden text-violet-600 peer-checked:block"
        />
      </span>
      <label
        className="w-fit cursor-pointer select-none text-sm capitalize"
        htmlFor={category + "ID"}
      >
        {category}
      </label>
    </div>
  );
}

export default ProductCategories;
