import { useSearchParams } from "react-router-dom";

function SearchResult() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  return (
    <>
      <h1 className="mb-8 text-3xl">
        {search ? (
          <>
            Result for your search{" "}
            <span className="font-semibold text-violet-500">{`"${search}"`}</span>
          </>
        ) : (
          <>All products</>
        )}
      </h1>
    </>
  );
}

export default SearchResult;
