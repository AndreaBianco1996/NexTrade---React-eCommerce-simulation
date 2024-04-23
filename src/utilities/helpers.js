export function sameParam(data, item) {
  const check = data.find((el) => item.id === el.id);
  return check;
}

export function convertedAllProducts(products) {
  if (products) {
    const productsConverted = products.map((item) => {
      return {
        ...item,
        price: +item.price.toFixed(2),
        rating: +item.rating.toFixed(2),
        discountPercentage: +item.discountPercentage.toFixed(2),
        discountPrice: +item.discountPercentage
          ? (
              +item.price -
              (+item.price * +item.discountPercentage) / 100
            ).toFixed(2)
          : +item.price.toFixed(2),
      };
    });

    return productsConverted;
  }
}

export function useProducts(data, limit, categories, minPrice, maxPrice) {
  if (data && categories.length)
    return data.products
      .filter((item) => categories.includes(item.category))
      .filter((_, index) => index < limit);

  return data.products.filter((_, index) => index < limit);
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
