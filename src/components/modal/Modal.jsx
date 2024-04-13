import Error from "../error/Error";
import Spinner from "../spinner/Spinner";
import ModalItem from "./ModalItem";

function Modal({ products, error, isLoading }) {
  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <div className="absolute top-16 bg-slate-700">
      {products.map((item) => (
        <ModalItem product={item} key={item.id} />
      ))}
    </div>
  );
}

export default Modal;
