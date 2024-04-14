import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import Modal from "../modal/Modal";
import { useSearchProductQuery } from "../../services/productsApi";

function SearchButton() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [productIdToNavigate, setProductIdToNavigate] = useState(null);
  const { data, error } = useSearchProductQuery(query);

  function handleModal(value, open) {
    setQuery(value);
    if (value) setIsOpen(open);
    if (!value) setIsOpen(!open);
  }

  function handleCloseModale() {
    setIsOpen(false);
  }

  function handleOpenModal(value) {
    if (!value) return;
    setIsOpen(true);
    setQuery(value);
  }

  function navigateToProduct(productId) {
    setProductIdToNavigate(productId);
  }

  return (
    <>
      <form className="relative flex items-center">
        <input
          placeholder="Search products..."
          type="text"
          name="text"
          value={query}
          id="text"
          onChange={(e) => handleModal(e.target.value, true)}
          onClick={(e) => handleOpenModal(e.target.value)}
          className="peer z-10 h-10 w-80 cursor-text rounded-full border border-violet-300 pl-11 pr-4 text-sm outline-none focus:border-2 focus:border-violet-600"
        />

        <span className="absolute left-3 z-10 text-violet-300 peer-focus:text-violet-600">
          <Icon icon="ri:search-line" width="24" height="24" />
        </span>
      </form>

      {isOpen && (
        <Modal
          products={data.products}
          error={error}
          onCloseModale={handleCloseModale}
          navigateToProduct={navigateToProduct}
          isOpen={isOpen}
        />
      )}
    </>
  );
}

export default SearchButton;
