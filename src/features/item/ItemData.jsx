import HeartButton from "../../components/buttons/HeartButton";
import ShareButton from "../../components/buttons/ShareButton";
import AddToCartButton from "../../components/buttons/AddToCartButton";

function ItemData({ productItem }) {
  const { description, discountPercentage, id, price, stock, discountPrice } =
    productItem;

  return (
    <div className="mx-auto flex w-full min-w-[100px] flex-col">
      <h3 className="mb-1 text-sm font-semibold italic">Description</h3>
      <p className="border-b border-gray-400 pb-6">{description}</p>

      <p className="mt-6 line-through">{price} $</p>
      <p className="text-red-600 no-underline">-{discountPercentage}%</p>
      <div className="mt-3 flex items-center">
        <p className="text-4xl font-bold">{discountPrice} $</p>
        <span
          className="ml-auto text-xs font-semibold"
          style={{ color: stock > 0 ? "green" : "red" }}
        >
          {stock > 0 ? "In stock" : "Out of stock"}
        </span>
      </div>

      <div className="my-6 flex items-center gap-2">
        <AddToCartButton addItem={productItem}>
          Add item to cart
        </AddToCartButton>
        <HeartButton id={id} addItem={productItem} />
        <ShareButton />
      </div>
    </div>
  );
}

export default ItemData;
