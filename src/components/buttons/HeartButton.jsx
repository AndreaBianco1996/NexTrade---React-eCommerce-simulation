import { Icon } from "@iconify/react/dist/iconify.js";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToWishlist,
  getWishlist,
  removeItemFromWishlist,
} from "../../services/cartWishSlice";
import { sameParam } from "../../utilities/helpers";

function HeartButton({ id, addItem }) {
  const dispatch = useDispatch();
  const wishListData = useSelector(getWishlist);

  const isWished = wishListData.map((el) => el.id).includes(id);

  function handleAddItemToWishlist(e) {
    e.preventDefault();
    const isWishlisted = sameParam(wishListData, addItem);
    if (isWishlisted) {
      dispatch(removeItemFromWishlist(addItem.id));
    } else dispatch(addItemToWishlist(addItem));
  }

  return (
    <button
      onClick={handleAddItemToWishlist}
      className="rounded-full p-2 transition-all hover:bg-violet-100"
    >
      <Icon
        icon={`mdi:heart${isWished ? "" : "-outline"}`}
        width="24"
        height="24"
        className="text-violet-600"
      />
    </button>
  );
}

export default HeartButton;
