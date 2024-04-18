import Spinner from "../../../components/spinner/Spinner";
import { useGetCategoriesQuery } from "../../../services/productsApi";
import ProductCategories from "./ProductCategories";
import ProductPrice from "./ProductPrice";

function ProductsFilters() {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

  function testing(category, isTrue) {}

  if (isLoading) return <Spinner />;

  return (
    <div className="">
      <h3 className="mb-3 border-b-2 pb-1 text-lg font-semibold">Categories</h3>
      {categories.map((category) => (
        <ProductCategories
          key={category}
          category={category}
          isCheck={testing}
        />
      ))}
      <button>Show More +</button>
      <ProductPrice />
    </div>
  );
}

export default ProductsFilters;
