import { Icon } from "@iconify/react/dist/iconify.js";

import HeartButton from "../../components/buttons/HeartButton";
import AddToCartButton from "../../components/buttons/AddToCartButton";
import { NavLink } from "react-router-dom";

//
//

function ProductRow({ product }) {
  const {
    description,
    discountPercentage,
    id,
    price,
    rating,
    stock,
    thumbnail,
    title,
    discountPrice,
  } = product;

  const addItem = {
    ...product,
    discountPrice,
    totalDiscountPrice: discountPrice,
    totalPrice: price,
    quantity: 1,
  };

  return (
    <NavLink
      to={`/item/${id}`}
      className="group m-auto my-2 flex h-40 w-full cursor-pointer rounded-xl bg-gray-50 p-3 shadow-sm transition-all hover:drop-shadow-md"
    >
      <div className="min-w-44 overflow-hidden rounded-lg">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-44 min-w-44 rounded-lg object-cover transition-all group-hover:scale-110"
        />
      </div>

      <div className="mx-3 flex flex-col gap-1">
        <h1 className="text-lg font-bold uppercase">{title}</h1>
        <p className="mb-auto max-w-[400px] text-sm">
          {description.split(" ").length < 12
            ? description.split(" ").slice(0, 12).join(" ")
            : description.split(" ").slice(0, 12).join(" ") + "..."}
        </p>

        <div className="flex items-center gap-1 text-xs font-semibold">
          <Icon
            icon="ic:round-star"
            width="22"
            height="22"
            className="text-yellow-500"
          />
          {rating}
          <span className="ml-12 font-semibold text-green-500">
            {stock > 0 ? `In stock (${stock})` : "out of stock"}
          </span>
        </div>
      </div>

      <div className="ml-auto flex flex-col gap-1">
        <span className="ml-auto text-xs font-semibold text-gray-400 line-through">
          {price} $
        </span>
        <span className="ml-auto text-xs font-semibold text-red-500">
          -{discountPercentage}%
        </span>
        <span className="ml-auto text-xl font-bold">{discountPrice} $</span>

        <div className="mt-auto flex items-center gap-3">
          <HeartButton addItem={addItem} id={id} />
          <AddToCartButton addItem={addItem} id={id}>
            Add item to cart
          </AddToCartButton>
        </div>
      </div>
    </NavLink>
  );
}

export default ProductRow;
