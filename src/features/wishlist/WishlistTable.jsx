import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../../services/cartWishSlice";
import WishlistItem from "./WishlistItem";

function WishlistTable() {
  const wishListData = useSelector(getWishlist);

  return (
    <div>
      {wishListData.map((el) => (
        <WishlistItem key={el.id} />
      ))}
    </div>
  );
}

export default WishlistTable;
