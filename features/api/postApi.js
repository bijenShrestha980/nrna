import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export const postApi = createApi({
  reducerPath: "post",
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
  tagTypes: ["posts"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/get_posts",
      providesTags: ["posts"],
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
