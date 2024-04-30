import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLink } from "react-router-dom";

function ModalItem({ product, onCloseModale }) {
  const { id, rating, stock, thumbnail, title } = product;

  return (
    <NavLink to={`item/${id}`}>
      <div
        onClick={onCloseModale}
        className="flex cursor-pointer items-center overflow-hidden border-b border-gray-300 bg-transparent pb-2 pt-2 transition-all hover:bg-gray-100"
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
    </NavLink>
  );
}

export default ModalItem;
