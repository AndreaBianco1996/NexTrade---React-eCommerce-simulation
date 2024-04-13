import { configureStore } from "@reduxjs/toolkit";
import cartWishReducer from "./cartWishSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productsApi } from "./productsApi";

const persistConfig = {
  key: "iws",
  storage,
};

const persistCartWishReducer = persistReducer(persistConfig, cartWishReducer);

export const store = configureStore({
  reducer: {
    cartWish: persistCartWishReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApi.middleware),
});

export const persistedStore = persistStore(store);
