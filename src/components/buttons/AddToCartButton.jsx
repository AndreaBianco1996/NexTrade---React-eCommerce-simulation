import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import {
  addItemToCart,
  getCart,
  increaseCartQuantity,
} from "../../services/cartWishSlice";
import { sameParam } from "../../utilities/helpers";

function AddToCartButton({ children, addItem, id }) {
  const dispatch = useDispatch();
  const cartData = useSelector(getCart);

  function handleAddItemToCart() {
    const isAdded = sameParam(cartData, addItem);
    if (isAdded) {
      dispatch(increaseCartQuantity(addItem.id));
    } else dispatch(addItemToCart(addItem));
  }

  return <Button onClick={handleAddItemToCart}>{children}</Button>;
}

export default AddToCartButton;
