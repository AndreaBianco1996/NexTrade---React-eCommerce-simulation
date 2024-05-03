import { Icon } from "@iconify/react/dist/iconify.js";
import { useProducts } from "../utilities/helpers";
import ImgSlider from "../components/imgSlider/ImgSlider";

function ItemTable({ product }) {
  const [productItem] = useProducts([product]);
  const {
    brand,
    category,
    images,
    description,
    discountPercentage,
    id,
    price,
    rating,
    stock,
    title,
    discountPrice,
  } = productItem;

  return (
    <main className="flex h-screen">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <h2 className="text-sm italic">{brand}</h2>
        <ImgSlider images={images} description={description} />
      </div>

      <div>
        <h3>{category}</h3>

        <p>{description}</p>
        <p>{price}</p>
        <p>-{discountPercentage}%</p>
        <p>{discountPrice}</p>
        <div className="flex">
          <Icon
            icon="ic:round-star"
            width="22"
            height="22"
            className="text-yellow-500"
          />
          <span>{rating}</span>
          <span className="ml-auto">{stock}</span>
        </div>
      </div>
    </main>
  );
}

export default ItemTable;
