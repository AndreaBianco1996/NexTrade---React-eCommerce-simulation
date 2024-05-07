import { useSearchParams } from "react-router-dom";
import OptionsSort from "./OptionsSort";

function ProductSort({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const checkSort = searchParams.get("sort");

  function handleSort(e) {
    const value = e.target.value;
    setSearchParams((prev) => {
      prev.set("sort", value);
      return prev;
    });
  }

  return (
    <div className="ml-auto flex w-full items-center justify-end">
      <label htmlFor="sort" className="font-semibold">
        Sort by:
      </label>
      <select
        name="sort"
        id="sort"
        value={checkSort || "popularity"}
        // className="ml-3 cursor-pointer rounded-lg px-3 py-1 text-sm outline outline-1 outline-offset-0 outline-gray-400 focus:outline-none focus:outline-1 focus:outline-offset-0 focus:outline-violet-600"
        className="ml-3 cursor-pointer rounded-lg px-3 py-1 text-sm shadow-md outline-none"
        onChange={handleSort}
      >
        {options.map((option) => (
          <OptionsSort
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </select>
    </div>
  );
}

export default ProductSort;
