import { useDispatch, useSelector } from "react-redux";
import {
  addMaxPrice,
  addMinPrice,
  getFilters,
} from "../../../services/filtersSlice";

function ProductPrice() {
  const dispatch = useDispatch();

  const {
    price: { minPrice, maxPrice },
  } = useSelector(getFilters);

  function handleMinPrice(e) {
    const value = +e.target.value;
    dispatch(addMinPrice(value));
  }

  function handleMaxPrice(e) {
    const value = +e.target.value;
    dispatch(addMaxPrice(value));
  }

  return (
    <form className="mt-6">
      <h3 className="mb-3 border-b-2 pb-1 text-lg font-semibold">Price</h3>
      <div className="flex items-center gap-2">
        <input
          type="number"
          className="max-w-28 rounded-full px-4 py-2 text-center text-sm"
          placeholder="0"
          value={minPrice || ""}
          onChange={handleMinPrice}
        />
        <span className="font-semibold">-</span>
        <input
          type="number"
          className="max-w-28 rounded-full px-4 py-2 text-center text-sm"
          placeholder="0"
          value={maxPrice || ""}
          onChange={handleMaxPrice}
        />
      </div>
    </form>
  );
}

export default ProductPrice;
