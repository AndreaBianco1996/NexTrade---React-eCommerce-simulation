import { useOutletContext, useSearchParams } from "react-router-dom";
import ProductRow from "./ProductRow";
import ItemNotFound from "../../components/buttons/ItemNotFound";
import { convertedAllProducts, useProducts } from "../../utilities/helpers";
import { useEffect } from "react";
import { getFilters } from "../../services/filtersSlice";
import { useSelector } from "react-redux";
import { getSearch } from "../../services/searchSlice";
import { getSort } from "../../services/sortSlice";

function ProductTable() {
  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
    sort: "",
    categories: 0,
    minPrice: 0,
    maxPrice: 0,
    limit: 30,
  });

  const searchStore = useSelector(getSearch);
  const { sort: sortStore } = useSelector(getSort);
  const {
    categories: categoriesStore,
    price: { minPrice: minPriceStore, maxPrice: maxPriceStore },
  } = useSelector(getFilters);

  const searchQuery = searchParams.get("search");
  const sort = searchParams.get("sort");
  const categories = searchParams.get("categories");
  const minPrice = +searchParams.get("minPrice");
  const maxPrice = +searchParams.get("maxPrice");
  const limit = +searchParams.get("limit");

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
      prev.set("search", searchStore);
      prev.set("sort", sortStore);
      prev.set("categories", categoriesStore);
      prev.set("minPrice", minPriceStore);
      prev.set("maxPrice", maxPriceStore);
      prev.set("limit", limit);
      return prev;
    });
  }, [
    searchStore,
    sortStore,
    categoriesStore,
    minPriceStore,
    maxPriceStore,
    limit,
    setSearchParams,
  ]);

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
