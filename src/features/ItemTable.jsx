import { Icon } from "@iconify/react/dist/iconify.js";
import { useProducts } from "../utilities/helpers";
import ImgSlider from "../components/imgSlider/ImgSlider";
import HeartButton from "../components/buttons/HeartButton";
import ShareButton from "../components/buttons/ShareButton";

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
      <div>
        <h1 className="mb-3 text-5xl font-bold">{title}</h1>
        <h2 className="mb-6 text-sm font-semibold">
          {brand}
          <span className="font-normal italic"> - {category}</span>
        </h2>

        <section className="flex gap-10">
          <ImgSlider images={images} description={description} />

          <div>
            <h3 className="mb-1 text-sm font-semibold">Description</h3>
            <p className="mb-6">{description}</p>
            <span className="mb-6 flex items-center gap-1 text-xs font-semibold">
              <Icon
                icon="ic:round-star"
                width="24"
                height="24"
                className="text-yellow-500"
              />
              {rating}
              <span className="ml-auto text-xs font-semibold text-green-600">
                Currently in stock: {stock}
              </span>
            </span>
            <div className="mb-6 flex items-center gap-2">
              <HeartButton id={id} addItem={product} />
              <ShareButton />
            </div>

            <div className="flex">
              <p className="line-through">{price} $</p>
              <p className="ml-4 text-red-600 no-underline">
                -{discountPercentage}%
              </p>
            </div>
            <p className="text-4xl font-bold">
              {discountPrice}
              <span> $</span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ItemTable;
