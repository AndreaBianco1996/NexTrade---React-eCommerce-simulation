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
    <aside className="sticky top-3 h-full min-w-72">
      <h3 className="mb-3 border-b-2 border-gray-300 pb-1 text-lg font-semibold">
        Categories
      </h3>
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

      <ClearAllFilters />
    </aside>
  );
}

export default ProductsFilters;
