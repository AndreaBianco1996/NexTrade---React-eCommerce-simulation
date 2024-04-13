import { convertedProducts } from "../../utilities/helpers";

function ModalItem({ product }) {
  const productConverted = convertedProducts(product);

  const {
    brand,
    category,
    description,
    discountPercentage,
    id,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
    discountPrice,
  } = productConverted;

  return (
    <div>
      <h1>{price}</h1>
    </div>
  );
}

export default ModalItem;
