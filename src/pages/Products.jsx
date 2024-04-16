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
import ProductFilterCategory from "../features/product-item/ProductFilterCategory";
import ProductFilterPrice from "../features/product-item/ProductFilterPrice";
import ProductFilterFor from "../features/product-item/ProductFilterFor";
import { useEffect, useState } from "react";

function Products() {
  const { state: query } = useLocation();
  const { data: categories } = useGetCategoriesQuery();
  const { data, error, isLoading } = useSearchProductQuery(query);

  const [isFiltered, setIsFiltered] = useState(false);
  const [dataFiltered, setDataFiltered] = useState(data);

  useEffect(() => {
    setDataFiltered(data);
  }, [data]);

  function handleFilterCategory(category, isChecked) {
    setIsFiltered(isChecked);
    if (isChecked) {
      const filteredData = data.products.filter(
        (item) => item.category === category,
      );
      setDataFiltered({ ...data, products: filteredData });
    } else setDataFiltered(data);
  }
  console.log(dataFiltered);

  if (isLoading || !dataFiltered) return <Spinner />;
  if (error || !dataFiltered) return <Error error={error.message} />;

  return (
    <main className="px-5 py-10">
      <div className="mb-4 flex justify-between border-b-2 pb-2">
        <h2 className="font-semibold">Filters</h2>
        <ProductFilterFor />
      </div>

      <section className="flex h-full gap-5">
        <ProductFilters>
          {categories.map((category) => (
            <ProductFilterCategory
              key={category}
              category={category}
              isCheck={handleFilterCategory}
            />
          ))}

          <ProductFilterPrice />
        </ProductFilters>

        {dataFiltered.products.length ? (
          <div className="m-auto w-full">
            {dataFiltered.products.map((product) => (
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
