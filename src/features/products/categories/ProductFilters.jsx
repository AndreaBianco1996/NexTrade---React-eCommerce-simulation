import { useState } from "react";
import { useShowCategories } from "../../../utilities/helpers";
import ProductCategories from "./ProductCategories";
import ProductPrice from "./ProductPrice";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters, getFilters } from "../../../services/filtersSlice";

function ProductsFilters({ allCategories }) {
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(false);
  const {
    categories: checkCategories,
    price: { minPrice, maxPrice },
  } = useSelector(getFilters);
  const disabled = !checkCategories.length && !minPrice && !maxPrice;

  const categories = useShowCategories(allCategories, showMore);

  function handleShowMore() {
    setShowMore((show) => !show);
  }

  function handleClearFilter() {
    dispatch(clearFilters());
  }

  return (
    <aside className="sticky top-20 h-full min-w-72">
      <h3 className="mb-3 border-b-2 pb-1 text-lg font-semibold">Categories</h3>
      {categories.map((category) => (
        <ProductCategories key={category} category={category} />
      ))}

      <button
        className="py-1 font-semibold text-violet-600"
        onClick={handleShowMore}
      >
        {showMore ? "Show less -" : "Show more +"}
      </button>

      <ProductPrice />

      <button
        disabled={disabled}
        onClick={handleClearFilter}
        className={`mt-6 w-full rounded-full py-3 text-sm transition-all ${disabled ? " bg-gray-300 text-gray-50" : " bg-red-600 text-red-50 hover:bg-red-500"}`}
      >
        Clear all
      </button>
    </aside>
  );
}

export default ProductsFilters;
