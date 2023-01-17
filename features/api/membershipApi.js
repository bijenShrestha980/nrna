import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export const membershipApi = createApi({
  reducerPath: "membership",
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
  tagTypes: ["Members", "Member"],
  endpoints: (builder) => ({
    memberRegister: builder.mutation({
      query: (data) => ({
        url: `/member_register`,
        method: "POST",
        body: data,
      }),
    }),
    getMembers: builder.query({
      query: () => "/members",
      providesTags: ["Members"],
    }),
    getMemberById: builder.mutation({
      query: ({ id }) => ({
        url: `/members/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["Member"],
    }),
  }),
});

export const {
  useMemberRegisterMutation,
  useGetMembersQuery,
  useGetMemberByIdMutation,
} = membershipApi;
