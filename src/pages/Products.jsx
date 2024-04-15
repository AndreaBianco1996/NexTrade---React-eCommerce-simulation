import Spinner from "../components/spinner/Spinner";
import Error from "../components/error/Error";
import ProductRow from "../features/product-item/ProductRow";
import {
  useGetCategoriesQuery,
  useSearchProductQuery,
} from "../services/productsApi";
import { useLocation } from "react-router-dom";
import ItemNotFound from "../components/buttons/ItemNotFound";
import ProductFilters from "../features/product-item/ProductFilters";
import ProductFilterPrice from "../features/product-item/ProductFilterPrice";

function Products() {
  const { state: query } = useLocation();
  const { data: categories } = useGetCategoriesQuery();
  const { data, error, isLoading } = useSearchProductQuery(query);

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error.message} />;

  return (
    <main className="px-5 py-10">
      <div className="mb-4 flex justify-between border-b-2 pb-4">
        <h2 className="font-semibold">Filters</h2>
        <p>ciao</p>
      </div>

      <section className="flex h-full gap-5">
        <div className="mt-2 h-full min-w-[300px] rounded">
          {categories.map((category) => (
            <ProductFilters category={category} price={data} key={category} />
          ))}
          <ProductFilterPrice />
        </div>

        {data.products.length ? (
          <div className="m-auto w-full">
            {data.products.map((product) => (
              <ProductRow product={product} key={product.id} />
            ))}
          </div>
        ) : (
          <ItemNotFound>{"No result for your search 😞"}</ItemNotFound>
        )}
      </section>
    </main>
  );
}

export default Products;
