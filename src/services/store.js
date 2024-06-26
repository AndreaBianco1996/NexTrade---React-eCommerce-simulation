import { combineReducers, configureStore } from "@reduxjs/toolkit";
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

const rootReducer = combineReducers({
  cartWish: cartWishReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

const persistConfig = {
  key: "iws",
  storage,
  whitelist: "cartWish",
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApi.middleware),
});

export const persistedStore = persistStore(store);
