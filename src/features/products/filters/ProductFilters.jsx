import { useState } from "react";
import { useShowCategories } from "../../../utilities/helpers";
import ProductCategories from "./ProductCategories";
import ClearAllFilters from "../../../components/buttons/ClearAllFilters";
import ProductPrice from "./ProductPrice";

function ProductsFilters({ allCategories }) {
  const [showMore, setShowMore] = useState(false);

  const categories = useShowCategories(allCategories, showMore);

  function handleShowMore() {
    setShowMore((show) => !show);
  }

  return (
    <aside className="sticky top-3 mb-14 flex h-full min-w-72 flex-col">
      <h2 className="mb-4 border-b border-gray-200 pb-1 font-semibold">
        Filters
      </h2>
      <h3 className="mb-3 text-lg font-semibold">Categories</h3>
      {categories.map((category) => (
        <ProductCategories key={category} category={category} />
      ))}

      <button
        className="mr-auto py-1 font-semibold text-violet-600"
        onClick={handleShowMore}
      >
        {showMore ? "Show less -" : "Show more +"}
      </button>

      <span className="my-4 w-full border-b"></span>

      <ProductPrice />

      <ClearAllFilters />
    </aside>
  );
}

export default ProductsFilters;
