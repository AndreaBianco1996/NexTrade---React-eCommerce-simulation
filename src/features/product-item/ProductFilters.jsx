import ProductFilterCategory from "./ProductFilterCategory";

function ProductFilters({ category }) {
  return (
    <div>
      <ProductFilterCategory category={category} />
    </div>
  );
}

export default ProductFilters;
