import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export const membershipApi = createApi({
  reducerPath: "membership",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}/api/`,
    prepareHeaders: (headers) => {
      const token = Cookies.get("nrna");
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    memberRegister: builder.mutation({
      query: (data) => ({
        url: `/member_register`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useMemberRegisterMutation } = membershipApi;
