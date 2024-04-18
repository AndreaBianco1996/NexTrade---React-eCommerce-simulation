import Spinner from "../components/spinner/Spinner";
import { useGetCategoriesQuery } from "../services/productsApi";
import { Outlet } from "react-router-dom";
import ProductFilters from "../features/product-item/ProductFilters";
import ProductFilterCategory from "../features/product-item/ProductFilterCategory";
import ProductFilterPrice from "../features/product-item/ProductFilterPrice";
import ProductFilterFor from "../features/product-item/ProductFilterFor";

function Products() {
  const {
    data: categories,
    error: errCategory,
    isLoading: isLoadCategories,
  } = useGetCategoriesQuery();

  function testing(category, isTrue) {}

  if (isLoadCategories) return <Spinner />;

  return (
    <main className="px-5 py-10">
      <div className="mb-4 flex justify-between border-b-2 pb-2">
        <h2 className="font-semibold">Filters</h2>
        <ProductFilterFor />
      </div>

      <section className="flex h-full gap-5">
        <ProductFilters>
          {categories.map((category) => (
            <ProductFilterCategory
              key={category}
              category={category}
              isCheck={testing}
            />
          ))}
          <button>Show More +</button>
          <ProductFilterPrice />
        </ProductFilters>
      </section>
      <Outlet />
    </main>
  );
}

export default Products;
