import { useOutletContext } from "react-router-dom";
import ProductRow from "./ProductRow";
import ItemNotFound from "../../components/buttons/ItemNotFound";
import { convertedAllProducts, useProducts } from "../../utilities/helpers";
import { useEffect, useState } from "react";
import { addMaxPrice, getFilters } from "../../services/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductTable() {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(20);

  const {
    categories,
    price: { minPrice, maxPrice },
  } = useSelector(getFilters);

  const { allProducts } = useOutletContext();
  const productsChecker = useProducts(
    allProducts,
    limit,
    categories,
    minPrice,
    maxPrice,
  );
  const productsConverted = convertedAllProducts(productsChecker);

  function handleSkip() {
    if (limit > allProducts.products.length || limit > productsConverted.length)
      return;
    setLimit((lim) => lim + 20);
  }

  useEffect(() => {
    if (categories.length) {
      const filteredProductsPrice = productsConverted?.reduce(
        (acc, item) => acc + item?.price,
        0,
      );
      dispatch(addMaxPrice(filteredProductsPrice));
    } else {
      const allProductsPrice = allProducts?.products?.reduce(
        (acc, item) => acc + item?.price,
        0,
      );
      dispatch(addMaxPrice(allProductsPrice));
    }
  }, [allProducts, dispatch, productsConverted, categories]);

  return (
    <div className="w-full">
      {productsConverted.length ? (
        <div className="m-auto w-full">
          {productsConverted.map((product) => (
            <ProductRow product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <ItemNotFound>{"No result for your search 😞"}</ItemNotFound>
      )}

      {!categories.length && (
        <button
          name="Next"
          onClick={(e) => handleSkip(e.target.type)}
          className={
            "my-3 w-full rounded-xl bg-violet-600 py-3 text-violet-100 transition-all hover:bg-violet-500"
          }
        >
          Show more...
        </button>
      )}
    </div>
  );
}

export default ProductTable;
