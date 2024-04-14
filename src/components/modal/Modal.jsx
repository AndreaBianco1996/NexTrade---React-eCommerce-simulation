import Error from "../error/Error";
import ModalItem from "./ModalItem";

function Modal({ products, error, onCloseModale }) {
  if (error) return <Error />;

  return (
    <>
      <div
        onClick={onCloseModale}
        className="fixed bottom-0 left-0 right-0 top-0 m-auto h-screen bg-black/20 backdrop-blur-[1px]"
      ></div>
      <div className="absolute left-0 right-0 top-20 m-auto max-w-[1000px] overflow-hidden rounded-xl border-gray-50 bg-gray-50 px-5 py-6">
        <h1
          className={
            products.length
              ? "mx-2 mb-4 border-b border-gray-800 pb-0.5 text-xl text-gray-800"
              : "flex h-full items-center justify-center font-semibold"
          }
        >
          {products.length ? "Products" : "No items found 😞"}
        </h1>

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
    </>
  );
}

export default Modal;
