import { useSearchParams } from "react-router-dom";

function ProductPrice() {
  const [searchParams, setSearchParams] = useSearchParams();
  const checkMinPrice = searchParams.get("minPrice");
  const checkMaxPrice = searchParams.get("maxPrice");

  function handleMinPrice(e) {
    const value = +e.target.value;
    setSearchParams((prev) => {
      prev.set("minPrice", value);
      return prev;
    });
  }

  function handleMaxPrice(e) {
    const value = +e.target.value;
    setSearchParams((prev) => {
      prev.set("maxPrice", value);
      return prev;
    });
  }

  return (
    <form>
      <h3 className="mb-3 text-lg font-semibold">Price</h3>
      <div className="flex items-center gap-2">
        <input
          type="number"
          className="max-w-28 rounded-full bg-[#fcfcfc] px-4 py-2 text-center text-sm shadow-sm outline outline-1 outline-gray-400 placeholder:text-gray-300 focus:outline-none focus:outline-1 focus:outline-offset-0 focus:outline-violet-500"
          placeholder="Min"
          value={checkMinPrice || ""}
          onChange={handleMinPrice}
        />
        <span className="text-gray-400">-</span>
        <input
          type="number"
          className="max-w-28 rounded-full bg-[#fcfcfc] px-4 py-2 text-center text-sm shadow-sm outline outline-1 outline-gray-400 placeholder:text-gray-300 focus:outline-none focus:outline-1 focus:outline-offset-0 focus:outline-violet-500"
          placeholder="Max"
          value={checkMaxPrice || ""}
          onChange={handleMaxPrice}
        />
      </div>
    </form>
  );
}

export default ProductPrice;
