import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export const paymentApi = createApi({
  reducerPath: "payment",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}/api/`,
    prepareHeaders: (headers) => {
      const token = Cookies.get("nrna_token");
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Paypal"],
  endpoints: (builder) => ({
    order: builder.mutation({
      query: (orderId) => ({
        url: `/orders/${orderId}`,
        method: "GET",
      }),
    }),
    paypalKey: builder.mutation({
      query: () => ({
        url: `/keys/paypal`,
        method: "GET",
      }),
      providesTags: ["Paypal"],
    }),
    paypal: builder.mutation({
      query: ({ props }) => ({
        url: `/orders/${props.order._id / props.pay}`,
        method: "PUT",
      }),
      providesTags: ["Paypal"],
    }),
  }),
});

export const { useOrderMutation, usePaypalKeyMutation, usePaypalMutation } =
  paymentApi;
