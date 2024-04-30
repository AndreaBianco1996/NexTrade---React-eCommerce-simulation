import { useSearchParams } from "react-router-dom";

function ClearAllFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const checkCategories = searchParams.getAll("category") || [];
  const checkMinPrice = searchParams.get("minPrice") || 0;
  const checkMaxPrice = searchParams.get("maxPrice") || 0;

  const disabled = !checkCategories.length && !checkMinPrice && !checkMaxPrice;

  function handleClearFilter() {
    const newParams = new URLSearchParams();
    setSearchParams(newParams);
  }
  return (
    <button
      disabled={disabled}
      onClick={handleClearFilter}
      className={`mt-6 w-full rounded-full py-3 text-sm transition-all ${disabled ? " bg-gray-300 text-gray-50" : " bg-red-600 text-red-50 hover:bg-red-500"}`}
    >
      Remove all filters
    </button>
  );
}

export default ClearAllFilters;
