export function sameParam(data, item) {
  const check = data.find((el) => item.id === el.id);
  return check;
}

export function convertedProducts(product) {
  const priceFixed = product.price.toFixed(2);
  const ratingFixed = product.rating.toFixed(2);
  const discountPercentageFixed = product.discountPercentage.toFixed(2);
  const discountPrice = product.discountPercentage
    ? (
        product.price -
        (product.price * product.discountPercentage) / 100
      ).toFixed(2)
    : product.price.toFixed(2);
  return {
    ...product,
    price: priceFixed,
    rating: ratingFixed,
    discountPercentage: discountPercentageFixed,
    discountPrice,
  };
}
