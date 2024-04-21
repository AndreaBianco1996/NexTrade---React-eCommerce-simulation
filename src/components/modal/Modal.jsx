import { useSearch } from "../../utilities/helpers";
import ItemNotFound from "../buttons/ItemNotFound";
import ModalItem from "./ModalItem";

function Modal({ products, onCloseModale, searchQuery }) {
  const searchProduct = useSearch(products, searchQuery);

  return (
    <div className="absolute left-0 right-0 top-20 z-20 m-auto max-w-[1000px] overflow-hidden rounded-xl border-gray-50 bg-gray-50 px-5 py-6">
      <ItemNotFound products={searchProduct}>
        {searchProduct.length ? "Products" : "No result for your search 😞"}
      </ItemNotFound>

      {searchProduct.length > 0 && (
        <div className="h-[500px] overflow-y-scroll px-2">
          {searchProduct.map((item) => (
            <ModalItem
              product={item}
              onCloseModale={onCloseModale}
              key={item.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Modal;
