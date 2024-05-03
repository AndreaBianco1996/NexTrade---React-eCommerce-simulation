import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLink } from "react-router-dom";

function IconsNavbar({ to, quantity, iconType }) {
  return (
    <NavLink to={to} className="relative text-gray-900">
      {quantity > 0 && (
        <span className="absolute bottom-3 left-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-semibold text-gray-100">
          {quantity}
        </span>
      )}
      <Icon icon={iconType} width="24" height="24" />
    </NavLink>
  );
}

export default IconsNavbar;
