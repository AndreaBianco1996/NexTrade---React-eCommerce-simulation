import { NavLink } from "react-router-dom";

function IconsLinkHeader({ to, children, quantity }) {
  return (
    <NavLink to={to} className="relative">
      {quantity > 0 && (
        <span className="absolute bottom-3 left-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-semibold text-gray-100">
          {quantity}
        </span>
      )}
      {children}
    </NavLink>
  );
}

export default IconsLinkHeader;
