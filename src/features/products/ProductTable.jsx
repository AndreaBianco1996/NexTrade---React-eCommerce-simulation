import { useParams } from "react-router-dom";
import { useSearchProductQuery } from "../../services/productsApi";
import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/error/Error";
import ProductRow from "./ProductRow";
import ItemNotFound from "../../components/buttons/ItemNotFound";
import { useProducts } from "../../utilities/helpers";
import { useState } from "react";

function ProductTable() {
  const { search, category } = useParams();
  const { data, error, isLoading } = useSearchProductQuery(search);

  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);

  const products = useProducts(data, limit, skip);

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error.message} />;

  function handleSkip(type) {
    setSkip((e) => e + 20);
  }
  console.log(products);

  return (
    <div className="col-span-3">
      {products.length ? (
        <div className="m-auto w-full">
          {products.map((product) => (
            <ProductRow product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <ItemNotFound>{"No result for your search 😞"}</ItemNotFound>
      )}
      <button name="Prev" onClick={(e) => handleSkip(e.target.type)}>
        Prev
      </button>
      <button name="Next" onClick={(e) => handleSkip(e.target.type)}>
        Next
      </button>
    </div>
  );
}

export default ProductTable;
