import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useGetAllProductsQuery } from "../../services/productsApi";
import Modal from "../../components/modal/Modal";
import { useSearchParams } from "react-router-dom";

function SearchButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const checkSearch = searchParams.get("search");

  const { data } = useGetAllProductsQuery();

  function handleModal(e) {
    const value = e.target.value;
    setSearchParams((prev) => {
      prev.set("search", value);
      return prev;
    });
    if (value) setIsOpen(true);
    if (!value) setIsOpen(false);
  }

  function handleCloseModale() {
    setIsOpen(false);
  }

  function handleOpenModal(e) {
    const value = e.target.value;
    if (!value) return;
    setIsOpen(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    document.activeElement.blur();
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <div
          onClick={handleCloseModale}
          className="absolute left-0 right-0 top-0 z-10 m-auto h-[calc(100vh+100px)] bg-black/20 backdrop-blur-[1px]"
        ></div>
      )}
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="relative flex items-center"
      >
        <input
          placeholder="Search products..."
          type="text"
          name="text"
          value={checkSearch || ""}
          id="text"
          onChange={handleModal}
          onClick={handleOpenModal}
          className="peer z-10 h-10 w-80 cursor-text rounded-full border border-violet-300 pl-11 pr-4 text-sm outline-none focus:border-2 focus:border-violet-600"
        />

        <button
          type="sumbit"
          className="absolute left-3 z-10 text-violet-300 peer-focus:text-violet-600"
        >
          <Icon icon="ri:search-line" width="24" height="24" />
        </button>
      </form>

      {isOpen && (
        <Modal
          products={data.products}
          onCloseModale={handleCloseModale}
          isOpen={isOpen}
          searchQuery={checkSearch}
        />
      )}
    </>
  );
}

export default SearchButton;
