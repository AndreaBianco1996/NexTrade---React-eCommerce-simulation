import Spinner from "../components/spinner/Spinner";
import Error from "../components/error/Error";
import ProductItem from "../features/product-item/ProductItem";
import { useGetAllProductsQuery } from "../services/productsApi";

function Products() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error.message} />;

  return (
    <main className="h-full py-5">
      <div className="m-auto max-w-[1400px] px-5">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </main>
  );
}

export default Products;
