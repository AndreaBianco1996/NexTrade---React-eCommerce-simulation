import ProductFilters from "../features/products/filters/ProductFilters";
import ProductSort from "../features/products/sort/ProductSort";
import {
  useGetAllProductsQuery,
  useGetCategoriesQuery,
} from "../services/productsApi";
import Spinner from "../components/spinner/Spinner";
import Error from "../components/error/Error";
import ProductTable from "../features/products/ProductTable";
import SearchResult from "../components/searchResult/SearchResult";

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
      <SearchResult />
      <ProductSort
        options={[
          { value: "popularity", label: "Popularity" },
          { value: "title-asc", label: "Name (A-Z)" },
          { value: "title-desc", label: "Name (Z-A)" },
          { value: "discountPrice-asc", label: "Price (Low to High)" },
          { value: "discountPrice-desc", label: "Price (High to Low)" },
        ]}
      />
      <div className="mt-6 flex gap-6">
        <ProductFilters allCategories={allCategories} />
        <ProductTable allProducts={allProducts} />
      </div>
    </main>
  );
}

export default Products;
