import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import Modal from "../modal/Modal";
import { useSearchProductQuery } from "../../services/productsApi";

function SearchButton() {
  const [query, setQuery] = useState("");
  const { data, error, isLoading } = useSearchProductQuery(query);

  function handleSearch(e) {
    e.preventDefault();
  }

  return (
    <>
      <form className="relative flex items-center">
        <input
          type="text"
          name="text"
          value={query}
          id="text"
          onChange={(e) => setQuery(e.target.value)}
          onBlur={() => setQuery("")}
          className="peer z-10 h-10 w-80 cursor-text rounded-full border border-violet-300 pl-11 pr-4 text-sm outline-none focus:border-2 focus:border-violet-600"
        />

        <button
          type="submit"
          onClick={(e) => handleSearch(e)}
          className="absolute left-3 z-10 text-violet-300 peer-focus:text-violet-600"
        >
          <Icon icon="ri:search-line" width="24" height="24" />
        </button>
      </form>

      {query && (
        <Modal products={data.products} error={error} isLoading={isLoading} />
      )}
    </>
  );
}

export default SearchButton;
