import ItemNotFound from "../buttons/ItemNotFound";
import Error from "../error/Error";
import ModalItem from "./ModalItem";

function Modal({ products, error, onCloseModale }) {
  if (error) return <Error />;

  return (
    <div className="absolute left-0 right-0 top-20 z-20 m-auto max-w-[1000px] overflow-hidden rounded-xl border-gray-50 bg-gray-50 px-5 py-6">
      <ItemNotFound products={products}>
        {products.length ? "Products" : "No result for your search 😞"}
      </ItemNotFound>

      {products.length > 0 && (
        <div className="h-[500px] overflow-y-scroll px-2">
          {products.map((item) => (
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
