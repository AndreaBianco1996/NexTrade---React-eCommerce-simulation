import { Icon } from "@iconify/react/dist/iconify.js";

function ShareButton() {
  return (
    <button className="rounded-full bg-violet-100 p-2 transition-all hover:bg-violet-50">
      <Icon
        icon="material-symbols:share-outline"
        width="24"
        height="24"
        className="text-violet-600"
      />
    </button>
  );
}

export default ShareButton;
