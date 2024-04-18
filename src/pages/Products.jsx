import { Outlet } from "react-router-dom";
import ProductFilters from "../features/products/categories/ProductFilters";
import ProductSort from "../features/products/sort/ProductSort";

function Products() {
  return (
    <main className="grid grid-cols-4 gap-6 px-5 py-10">
      <ProductSort />
      <ProductFilters />

      <Outlet />
    </main>
  );
}

export default Products;
