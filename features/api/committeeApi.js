import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export const committeeApi = createApi({
  reducerPath: "committee",
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
  tagTypes: ["committees"],
  endpoints: (builder) => ({
    getCommittees: builder.query({
      query: () => "/get_committees",
      providesTags: ["committees"],
    }),
  }),
});

export const { useGetCommitteesQuery } = committeeApi;
