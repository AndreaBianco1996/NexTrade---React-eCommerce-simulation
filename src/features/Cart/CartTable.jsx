import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { getCart } from "../../services/cartWishSlice";

function CartTable() {
  const cartData = useSelector(getCart);

  if (cartData.length < 0) return <div>empty</div>;

  return (
    <div>
      {cartData.map((cart) => (
        <CartItem cart={cart} key={cart.id} />
      ))}
    </div>
  );
}

export default CartTable;
