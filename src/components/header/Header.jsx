import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import IconsLinkHeader from "./IconsLinkHeader";
import { getQuantity, getWishlistQuantity } from "../../services/cartWishSlice";
import SearchButton from "../../features/search/SearchButton";
import { getSearch } from "../../services/searchSlice";
import { getSort } from "../../services/sortSlice";
import { getFilters } from "../../services/filtersSlice";

//

function Header() {
  const cartQuantity = useSelector(getQuantity);
  const wishlistQuantity = useSelector(getWishlistQuantity);

  const searchStore = useSelector(getSearch);
  const { sort: sortStore } = useSelector(getSort);
  const {
    categories: categoriesStore,
    price: { minPrice: minPriceStore, maxPrice: maxPriceStore },
  } = useSelector(getFilters);

  return (
    <header className="bg-gray-50 shadow-md">
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
            to={{
              pathname: "/products/",
              search: `?search=${searchStore}&sort=${sortStore}&categories=${categoriesStore}&minPrice=${minPriceStore}&maxPrice=${maxPriceStore}&limit=${30}`,
            }}
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
          <IconsLinkHeader to="/cart" items={0} quantity={cartQuantity}>
            <Icon icon="ri:shopping-cart-line" width="24" height="24" />
          </IconsLinkHeader>
          <IconsLinkHeader to="/wishlist" items={0} quantity={wishlistQuantity}>
            <Icon icon="ri:heart-3-line" width="24" height="24" />
          </IconsLinkHeader>
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
    </header>
  );
}

export default Header;
