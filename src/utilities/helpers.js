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

export function useProducts(data, limit) {
  if (data) return data.products.filter((_, index) => index < limit);
}

export function useShowCategories(data, showMore) {
  if (data && !showMore) {
    const categories = data.filter((_, index) => index < 10);
    return categories;
  }
  if (data && showMore) {
    return data;
  }
}

export function useSearch(products, search) {
  if (products) {
    const searchProduct = products.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
    return searchProduct;
  }
}
