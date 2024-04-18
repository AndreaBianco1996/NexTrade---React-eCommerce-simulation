import { Icon } from "@iconify/react/dist/iconify.js";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/buttons/Button";
import {
  addItemToCart,
  addItemToWishlist,
  getCart,
  getWishlist,
  increaseCartQuantity,
  removeItemFromWishlist,
} from "../../services/cartWishSlice";
import { convertedProducts, sameParam } from "../../utilities/helpers";
import HeartButton from "../../components/buttons/HeartButton";

//
//

function ProductRow({ product }) {
  const dispatch = useDispatch();
  const cartData = useSelector(getCart);
  const wishListData = useSelector(getWishlist);

  const productConverted = convertedProducts(product);

  const {
    brand,
    category,
    description,
    discountPercentage,
    id,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
    discountPrice,
  } = productConverted;

  const isWished = wishListData.map((el) => el.id).includes(id);

  const addItem = {
    ...productConverted,
    discountPrice,
    totalDiscountPrice: discountPrice,
    totalPrice: price,
    quantity: 1,
  };

  function handleAddItemToCart() {
    const isAdded = sameParam(cartData, addItem);
    if (isAdded) {
      dispatch(increaseCartQuantity(addItem.id));
    } else dispatch(addItemToCart(addItem));
  }

  function handleAddItemToWishlist() {
    const isWishlisted = sameParam(wishListData, addItem);
    if (isWishlisted) {
      dispatch(removeItemFromWishlist(addItem.id));
    } else dispatch(addItemToWishlist(addItem));
  }

  return (
    <>
      <div className="m-auto my-2 flex h-40 w-full rounded-xl bg-gray-50 p-3 shadow-sm">
        <img
          src={thumbnail}
          alt={title}
          className="w-44 min-w-44 rounded-lg object-cover"
        />

        <div className="mx-3 flex flex-col gap-1">
          <h1 className="text-lg font-bold uppercase">{title}</h1>
          <p className="mb-auto max-w-[400px] text-sm">
            {description.split(" ").length < 12
              ? description.split(" ").slice(0, 12).join(" ")
              : description.split(" ").slice(0, 12).join(" ") + "..."}
          </p>
          <span className="flex items-center gap-1 text-xs font-semibold">
            <Icon
              icon="ic:round-star"
              width="22"
              height="22"
              style={{ color: "#ffda24" }}
            />
            {rating}
            <span className="ml-12 font-semibold text-green-500">
              {stock > 0 ? `In stock (${stock})` : "out of stock"}
            </span>
          </span>
        </div>

        <div className="ml-auto flex flex-col gap-1">
          <span className="ml-auto  text-xs font-semibold text-gray-400 line-through">
            {price} $
          </span>
          <span className="ml-auto text-xs font-semibold text-red-500">
            -{discountPercentage}%
          </span>
          <span className="ml-auto text-xl font-bold">{discountPrice} $</span>

          <div className="mt-auto flex items-center gap-3">
            <HeartButton
              onClick={handleAddItemToWishlist}
              isWished={isWished}
            />
            <Button onClick={handleAddItemToCart}>Add to cart</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductRow;
