import { useState } from "react";
import { useShowCategories } from "../../../utilities/helpers";
import ProductCategories from "./ProductCategories";
import ProductPrice from "./ProductPrice";

function ProductsFilters({ allCategories }) {
  const [showMore, setShowMore] = useState(false);

  const categories = useShowCategories(allCategories, showMore);

  function handleShowMore() {
    setShowMore((show) => !show);
  }

  return (
    <div className="">
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
    </div>
  );
}

export default ProductsFilters;
