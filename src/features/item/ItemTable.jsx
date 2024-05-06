import { useProducts } from "../../utilities/helpers";
import ImgSlider from "../../components/imgSlider/ImgSlider";
import ItemData from "./ItemData";
import ItemSeeMore from "./ItemSeeMore";
import { Icon } from "@iconify/react/dist/iconify.js";

function ItemTable({ product }) {
  const [productItem] = useProducts([product]);
  const { brand, category, images, description, title, rating } = product;

  return (
    <main className="h-screen">
      <div>
        <h1 className="mb-3 text-5xl font-bold">{title}</h1>
        <h2 className="mb-3 text-sm font-semibold">
          {brand}
          <span className="font-normal italic"> - {category}</span>
        </h2>
        <span className="mb-6 flex items-center gap-1 text-xs">
          <Icon
            icon="ic:round-star"
            width="22"
            height="22"
            className="text-yellow-500"
          />
          {rating}
        </span>

        <section className="flex h-full w-full gap-10">
          <ItemSeeMore />
          <ImgSlider images={images} description={description} />
          <ItemData productItem={productItem} />
        </section>
      </div>
    </main>
  );
}

export default ItemTable;
