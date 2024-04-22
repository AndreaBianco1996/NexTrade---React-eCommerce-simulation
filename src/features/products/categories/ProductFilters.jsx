import { useState } from "react";
import { useShowCategories } from "../../../utilities/helpers";
import { useSelector } from "react-redux";
import { getFilters } from "../../../services/filtersSlice";
import ProductCategories from "./ProductCategories";
import ProductPrice from "./ProductPrice";

function ProductsFilters({ allCategories }) {
  const { categories: thereAreCategories } = useSelector(getFilters);

  const [showMore, setShowMore] = useState(false);

  const categories = useShowCategories(allCategories, showMore);

  function handleShowMore() {
    setShowMore((show) => !show);
  }

  return (
    <aside className="sticky top-20 h-[calc(100vh-200px)] min-w-80 overflow-auto pr-3">
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
    </aside>
  );
}

export default ProductsFilters;
