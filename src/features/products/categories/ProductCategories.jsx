import {
  addCategory,
  getFilters,
  removeCategory,
} from "../../../services/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductCategories({ category }) {
  const dispatch = useDispatch();

  const {
    categories,
    price: { minPrice, maxPrice },
  } = useSelector(getFilters);

  function handleFilter(isChecked, value) {
    if (isChecked) dispatch(addCategory(value));
    if (!isChecked) dispatch(removeCategory(value));
  }

  return (
    <div className="mb-2.5 flex items-center gap-3">
      <input
        type="checkbox"
        id={category + "ID"}
        name="category"
        value={category}
        checked={categories.includes(category)}
        onChange={(e) => handleFilter(e.target.checked, e.target.value)}
        className="relative h-5 w-5 cursor-pointer appearance-none rounded-[5px] border border-gray-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:m-auto after:h-3 after:w-3 after:rounded-[3px] checked:border-violet-500 after:checked:bg-violet-800"
      />
      <label
        className="w-fit cursor-pointer text-sm capitalize"
        htmlFor={category + "ID"}
      >
        {category}
      </label>
    </div>
  );
}

export default ProductCategories;
