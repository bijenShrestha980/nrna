import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
// SLICES
import { appSlice } from "./slice/appSlice";
// API
import { authApi } from "./api/authApi";
import { postApi } from "./api/postApi";
import { committeeApi } from "./api/committeeApi";
import { membershipApi } from "./api/membershipApi";
import { paymentApi } from "./api/paymentApi";

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [membershipApi.reducerPath]: membershipApi.reducer,
    [committeeApi.reducerPath]: committeeApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      authApi.middleware,
      membershipApi.middleware,
      committeeApi.middleware,
      postApi.middleware,
      paymentApi.middleware
    ),
});

export const persistor = persistStore(store);
