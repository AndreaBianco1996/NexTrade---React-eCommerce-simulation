import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

function ModalItem({ product, onCloseModale }) {
  const navigate = useNavigate();

  const { id, rating, stock, thumbnail, title } = product;

  return (
    <div
      onClick={() => {
        onCloseModale();
        navigate(`/products/item/${id}`);
      }}
      className="mb-2 flex cursor-pointer items-center overflow-hidden border-b border-gray-300 bg-transparent pb-2"
    >
      <img
        src={thumbnail}
        alt={title}
        className="h-16 w-28 rounded-md object-cover"
      />
      <h1 className="ml-4 mr-auto text-lg">{title}</h1>
      <span className="flex items-center gap-1 text-xs font-semibold">
        <Icon
          icon="ic:round-star"
          width="22"
          height="22"
          style={{ color: "#ffda24" }}
        />
        {rating}
        <span className="ml-4 mr-4 font-semibold text-green-500">
          {stock > 0 ? `In stock (${stock})` : "out of stock"}
        </span>
      </span>
    </div>
  );
}

export default ModalItem;
