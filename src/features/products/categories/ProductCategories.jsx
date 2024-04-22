import { Navigate } from "react-router-dom";
import {
  addCategory,
  getFilters,
  removeCategory,
} from "../../../services/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../../../services/searchSlice";

function ProductCategories({ category }) {
  const dispatch = useDispatch();

  const {
    categories,
    price: { minPrice, maxPrice },
  } = useSelector(getFilters);
  const filters = categories.join("&");

  const searchQuery = useSelector(getSearch);

  function handleFilter(isChecked, value) {
    if (isChecked) dispatch(addCategory(value));
    if (!isChecked) dispatch(removeCategory(value));
  }

  return (
    <div className="mb-2 flex items-center gap-2">
      <input
        type="checkbox"
        id={category + "ID"}
        name="category"
        value={category}
        checked={categories.includes(category)}
        onChange={(e) => handleFilter(e.target.checked, e.target.value)}
      />
      <label className="capitalize" htmlFor={category + "ID"}>
        {category}
      </label>
      {filters ? (
        <Navigate
          to={`${filters}${searchQuery ? "/" : ""}${searchQuery}`}
          replace={true}
        />
      ) : (
        <Navigate to={searchQuery} replace={true} />
      )}
    </div>
  );
}

export default ProductCategories;
