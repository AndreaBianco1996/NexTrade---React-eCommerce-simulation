import { Outlet } from "react-router-dom";
import ProductFilters from "../features/products/categories/ProductFilters";
import ProductSort from "../features/products/sort/ProductSort";
import {
  useGetAllProductsQuery,
  useGetCategoriesQuery,
} from "../services/productsApi";
import Spinner from "../components/spinner/Spinner";
import Error from "../components/error/Error";

function Products() {
  const {
    data: allProducts,
    isLoading: isLoadingProducts,
    error: productsError,
  } = useGetAllProductsQuery();

  const {
    data: allCategories,
    isLoading: isLoadingCategories,
    error: categoriesError,
  } = useGetCategoriesQuery();

  if (isLoadingProducts || isLoadingCategories) return <Spinner />;
  if (productsError || categoriesError) return <Error />;

  return (
    <main className="my-12">
      <ProductSort />
      <div className="mt-6 flex gap-6">
        <ProductFilters allCategories={allCategories} />
        <Outlet context={{ allProducts }} />
      </div>
    </main>
  );
}

export default Products;
