import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../utilities/helpers";
import ItemNotFound from "../../components/buttons/ItemNotFound";
import ProductRow from "./ProductRow";
import ShowMoreProductsButton from "../../components/buttons/ShowMoreProductsButton";

function ProductTable({ allProducts }) {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "popularity";
  const categories = searchParams.getAll("category") || [];
  const minPrice = +searchParams.get("minPrice") || 0;
  const maxPrice = +searchParams.get("maxPrice") || 0;
  const limit = +searchParams.get("limit") || 30;

  const products = useProducts(
    allProducts,
    limit,
    categories,
    minPrice,
    maxPrice,
    searchQuery,
    sort,
  );

  return (
    <div className="mb-12 w-full">
      {products.length ? (
        <div className="m-auto w-full">
          {products.map((product) => (
            <ProductRow product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <ItemNotFound>{"No result for your search 😞"}</ItemNotFound>
      )}

      {(products.length > products.length || products.length !== 0) &&
        !categories.length &&
        !searchQuery && <ShowMoreProductsButton />}
    </div>
  );
}

export default ProductTable;
