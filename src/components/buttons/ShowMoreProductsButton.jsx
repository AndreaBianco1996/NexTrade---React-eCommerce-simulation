import { useSearchParams } from "react-router-dom";

function ShowMoreProductsButton() {
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = +searchParams.get("limit") || 30;

  function handleSkip() {
    setSearchParams((prev) => {
      prev.set("limit", limit + 30);
      return prev;
    });
  }

  return (
    <button
      onClick={handleSkip}
      className={
        "my-3 w-full rounded-xl bg-violet-600 py-3 text-violet-100 transition-all hover:bg-violet-500"
      }
    >
      Show more...
    </button>
  );
}

export default ShowMoreProductsButton;
