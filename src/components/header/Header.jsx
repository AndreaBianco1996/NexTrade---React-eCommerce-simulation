import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import IconsLinkHeader from "./IconsLinkHeader";
import { getQuantity, getWishlistQuantity } from "../../services/cartWishSlice";
import SearchButton from "../buttons/SearchButton";

const classActive = ({ isActive }) =>
  isActive ? " text-slate-800" : " text-slate-400";

//

function Header() {
  const cartQuantity = useSelector(getQuantity);
  const wishlistQuantity = useSelector(getWishlistQuantity);

  return (
    <header className=" shadow-md">
      <div className="m-auto flex h-16 max-w-[1400px] items-center justify-between px-5">
        <Link to="/" className="mr-4 text-2xl font-extrabold">
          NexTrade
        </Link>

        <div className="m-auto flex items-center gap-4">
          <NavLink to="/" className={classActive}>
            <span>Home</span>
          </NavLink>
          <NavLink to="/products" className={classActive}>
            <span>Products</span>
          </NavLink>
        </div>

        <div className="ml-4 flex items-center gap-3 pr-4 text-slate-800">
          <SearchButton />
          <IconsLinkHeader to="/cart" items={0} quantity={cartQuantity}>
            <Icon icon="ri:shopping-cart-line" width="24" height="24" />
          </IconsLinkHeader>
          <IconsLinkHeader to="/wishlist" items={0} quantity={wishlistQuantity}>
            <Icon icon="ri:heart-3-line" width="24" height="24" />
          </IconsLinkHeader>
        </div>

        <NavLink to="/login" className={classActive}>
          <span className="text-xs">Login/Signup</span>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
