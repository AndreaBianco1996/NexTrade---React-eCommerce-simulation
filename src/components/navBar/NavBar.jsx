import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import IconsLinkHeader from "./IconsNavbar";
import { getQuantity, getWishlistQuantity } from "../../services/cartWishSlice";
import SearchButton from "../../features/search/SearchButton";

//

function NavBar() {
  const cartQuantity = useSelector(getQuantity);
  const wishlistQuantity = useSelector(getWishlistQuantity);

  return (
    <nav className="bg-gray-50 shadow-md">
      <div className="m-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5">
        <Link to="/" className="mr-4 text-2xl font-extrabold">
          NexTrade
        </Link>

        <div className="m-auto flex items-center gap-4 font-normal text-gray-500">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "scale-110 font-semibold text-gray-900 transition"
                : "transition hover:scale-110"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "scale-110 font-semibold text-gray-900 transition"
                : "transition hover:scale-110"
            }
          >
            Products
          </NavLink>
        </div>

        <div className="flex items-center gap-3">
          <SearchButton />
          <IconsLinkHeader
            iconType="ri:shopping-cart-line"
            to="/cart"
            items={0}
            quantity={cartQuantity}
          />
          <IconsLinkHeader
            iconType="ri:heart-3-line"
            to="/wishlist"
            items={0}
            quantity={wishlistQuantity}
          />
        </div>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "scale-105 text-xs font-semibold text-gray-900 transition"
              : "text-xs transition hover:scale-105"
          }
        >
          Login/Signup
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
