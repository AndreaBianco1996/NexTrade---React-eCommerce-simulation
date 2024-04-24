import { useDispatch, useSelector } from "react-redux";
import { getSort, setSort } from "../../../services/sortSlice";

function ProductSort() {
  const dispatch = useDispatch();
  const { sort } = useSelector(getSort);

  function handleSort(e) {
    dispatch(setSort(e.target.value));
  }

  return (
    <div className="flex items-center justify-between border-b-2 pb-2">
      <h2 className="font-semibold">Filters</h2>
      <div>
        <label htmlFor="sort" className="font-semibold">
          Sort by:
        </label>
        <select
          name="sort"
          id="sort"
          value={sort}
          className="ml-3 cursor-pointer rounded-lg px-3 py-1 text-sm focus:outline-none focus:outline-1 focus:outline-offset-0 focus:outline-violet-600"
          onChange={handleSort}
        >
          <option value="popularity" className="text-sm">
            Popularity
          </option>
          <option value="name-a-z" className="text-sm">
            Name: A - Z
          </option>
          <option value="name-z-a" className="text-sm">
            Name: Z - A
          </option>
          <option value="price-h-l" className="text-sm">
            Price: High - Low
          </option>
          <option value="price-l-h" className="text-sm">
            Price: Low - High
          </option>
        </select>
      </div>
    </div>
  );
}

export default ProductSort;
