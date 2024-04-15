import { Icon } from "@iconify/react/dist/iconify.js";

function HeartButton({ onClick, isWished }) {
  return (
    <button onClick={onClick}>
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
