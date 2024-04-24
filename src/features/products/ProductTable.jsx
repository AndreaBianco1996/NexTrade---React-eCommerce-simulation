import { useOutletContext, useSearchParams } from "react-router-dom";
import ProductRow from "./ProductRow";
import ItemNotFound from "../../components/buttons/ItemNotFound";
import { convertedAllProducts, useProducts } from "../../utilities/helpers";
import { useEffect, useState } from "react";
import { getFilters } from "../../services/filtersSlice";
import { useSelector } from "react-redux";
import { getSearch } from "../../services/searchSlice";
import { getSort } from "../../services/sortSlice";

function ProductTable() {
  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
    sort: "",
    categories: "",
    minPrice: 0,
    maxPrice: 0,
    limit: 30,
  });

  const limit = +searchParams.get("limit");

  const {
    categories,
    price: { minPrice, maxPrice },
  } = useSelector(getFilters);

  const searchQuery = useSelector(getSearch);

  const { sort } = useSelector(getSort);

  const { allProducts } = useOutletContext();
  const productsChecker = useProducts(
    allProducts,
    limit,
    categories,
    minPrice,
    maxPrice,
    searchQuery,
    sort,
  );
  const productsConverted = convertedAllProducts(productsChecker);

  function handleSkip() {
    setSearchParams((prev) => {
      prev.set("limit", limit + 30);
      return prev;
    });
  }

  useEffect(() => {
    setSearchParams((prev) => {
      prev.set("search", searchQuery);
      prev.set("sort", sort);
      prev.set("categories", categories);
      prev.set("minPrice", minPrice);
      prev.set("maxPrice", maxPrice);
      return prev;
    });
  }, [searchQuery, categories, minPrice, maxPrice, sort, setSearchParams]);

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

      {!categories.length &&
      allProducts.products.length !== productsConverted.length ? (
        <button
          onClick={(e) => handleSkip(e.target.type)}
          className={
            "my-3 w-full rounded-xl bg-violet-600 py-3 text-violet-100 transition-all hover:bg-violet-500"
          }
        >
          Show more...
        </button>
      ) : (
        <p className="my-3 w-full py-3 text-center">All products displayed</p>
      )}
    </div>
  );
}

export default ProductTable;
