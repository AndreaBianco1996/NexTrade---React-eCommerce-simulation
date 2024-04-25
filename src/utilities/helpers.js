import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getSearch } from "../services/searchSlice";
import { getSort } from "../services/sortSlice";
import { getFilters } from "../services/filtersSlice";

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

export function useProducts(
  data,
  limit,
  categories,
  minPrice,
  maxPrice,
  search,
  sort,
) {
  if (data) {
    const categoriesArr = !categories.length ? [] : categories.split(",");

    return data.products
      .filter((item) => {
        const categoryMatch =
          categoriesArr.length === 0 || categoriesArr.includes(item.category);

        const priceMatch =
          (!minPrice || item.price >= minPrice) &&
          (!maxPrice || item.price <= maxPrice);

        const searchMatch =
          !search || item.title.toLowerCase().includes(search.toLowerCase());

        return categoryMatch && priceMatch && searchMatch;
      })
      .sort((a, b) => {
        switch (sort) {
          case "name-a-z":
            return a.title.localeCompare(b.title);
          case "name-z-a":
            return b.title.localeCompare(a.title);
          case "price-h-l":
            return b.price - a.price;
          case "price-l-h":
            return a.price - b.price;
          default:
            return null;
        }
      })
      .slice(0, limit);
  }
  return data.products.slice(0, limit);
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
