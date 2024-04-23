import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../../services/productsApi";
import Modal from "../../components/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addSearch, getSearch } from "../../services/searchSlice";
import { getFilters } from "../../services/filtersSlice";

function SearchButton() {
  const dispatch = useDispatch();
  const searchQuery = useSelector(getSearch);

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useGetAllProductsQuery();

  const {
    categories,
    price: { minPrice, maxPrice },
  } = useSelector(getFilters);
  const filters = categories.join("&");

  function handleModal(value, open) {
    dispatch(addSearch(value));
    if (value) setIsOpen(open);
    if (!value) setIsOpen(!open);
  }

  function handleCloseModale() {
    setIsOpen(false);
  }

  function handleOpenModal(value) {
    if (!value) return;
    setIsOpen(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    document.activeElement.blur();
    navigate(
      searchQuery
        ? `products${filters.length > 0 ? `/${filters}` : ""}/${searchQuery}`
        : `products${filters ? "/" + filters : ""}`,
    );
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <div
          onClick={handleCloseModale}
          className="fixed bottom-0 left-0 right-0 top-0 z-10 m-auto h-screen bg-black/20 backdrop-blur-[1px]"
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
          value={searchQuery}
          id="text"
          onChange={(e) => handleModal(e.target.value, true)}
          onClick={(e) => handleOpenModal(e.target.value)}
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
          searchQuery={searchQuery}
        />
      )}
    </>
  );
}

export default SearchButton;
