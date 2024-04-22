import { useOutletContext } from "react-router-dom";
import ProductRow from "./ProductRow";
import ItemNotFound from "../../components/buttons/ItemNotFound";
import { useProducts } from "../../utilities/helpers";
import { useState } from "react";

function ProductTable() {
  const { allProducts } = useOutletContext();

  const [limit, setLimit] = useState(20);

  const products = useProducts(allProducts, limit);

  const disableButton = products.length === allProducts.products.length;

  function handleSkip() {
    if (limit >= allProducts.products.length) return;
    setLimit((lim) => lim + 20);
  }

  return (
    <div className="w-full">
      {products.length ? (
        <div className="m-auto w-full">
          {products.map((product) => (
            <ProductRow product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <ItemNotFound>{"No result for your search 😞"}</ItemNotFound>
      )}

      <button
        name="Next"
        onClick={(e) => handleSkip(e.target.type)}
        disabled={disableButton}
        className={
          "m my-3 w-full rounded-xl py-3 text-violet-100" +
          ` ${disableButton ? "bg-violet-400" : "bg-violet-600"}`
        }
      >
        {disableButton ? "You saw all products" : "Show more..."}
      </button>
    </div>
  );
}

export default ProductTable;
