export function sameParam(data, item) {
  const check = data.find((el) => item.id === el.id);
  return check;
}

export function useProducts(
  productsData,
  limit,
  categories,
  minPrice,
  maxPrice,
  search,
  sort,
) {
  const categoriesArr = categories || [];
  const limitSet =
    categoriesArr.length || minPrice || maxPrice || search ? 999999 : limit;

  const products = productsData.map((item) => {
    return {
      ...item,
      price: +item.price.toFixed(2),
      rating: +item.rating.toFixed(2),
      discountPercentage: +item.discountPercentage.toFixed(2),
      discountPrice: item.discountPercentage
        ? Number(
            (item.price - (item.price * item.discountPercentage) / 100).toFixed(
              2,
            ),
          )
        : Number(item.price.toFixed(2)),
    };
  });

  if (
    categoriesArr.length ||
    minPrice ||
    maxPrice ||
    search ||
    sort !== "popularity"
  ) {
    return products
      .filter((item) => {
        const categoryMatch =
          categoriesArr.length === 0 || categoriesArr.includes(item.category);

        const priceMatch =
          (!minPrice || item.discountPrice >= minPrice) &&
          (!maxPrice || item.discountPrice <= maxPrice);

        const searchMatch =
          !search || item.title.toLowerCase().includes(search.toLowerCase());

        return categoryMatch && priceMatch && searchMatch;
      })
      .sort((a, b) => {
        const [type, value] = sort.split("-");
        const multiplier = value === "asc" ? 1 : -1;

        if (type === "popularity" || !type) {
          return null;
        }
        if (type === "title") {
          return a[type].localeCompare(b[type]) * multiplier;
        }
        if (type === "discountPrice") {
          return (a[type] - b[type]) * multiplier;
        }
      });
  }

  return products.slice(0, limitSet);
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
