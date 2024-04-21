import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products/?limit=100",
    }),
    // searchProduct: builder.query({
    //   query: (product) =>
    //     product ? `products/search?q=${product}` : `products/?limit=100`,
    // }),
    getSingleProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
    getCategories: builder.query({
      query: () => `products/categories`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useSearchProductQuery,
  useGetSingleProductQuery,
  useGetCategoriesQuery,
} = productsApi;
