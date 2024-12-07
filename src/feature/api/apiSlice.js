import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_SERVER_URL;

// --- root app api query ---
export const apiSlice = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api/v1/user`,
  }),
  tagTypes: ["Auth"],

  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        url: "/sign-up",
        method: "POST",
        body: userData,
      }),
    }),
    signIn: builder.mutation({
      query: (userData) => ({
        url: "/sign-in",
        method: "POST",
        body: userData,
      }),
    }),

    logOutQuery: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      invalidatesTags: ["Auth"],
    }),

    userUpdate: builder.mutation({
      query: (userData) => ({
        url: "/user-information-update",
        method: "PATCH",
        body: userData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      invalidatesTags: ["Auth"],
    }),

    getUserInfo: builder.query({
      query: () => ({
        url: "/user-information",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["Auth"],
    }),

    getEmployeeInfo: builder.query({
      query: () => ({
        url: "https://run.mocky.io/v3/3e069d3a-3355-48b2-bfc4-3bfcbbacd196",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useLogOutQueryMutation,
  useUserUpdateMutation,
  useGetUserInfoQuery,
  useGetEmployeeInfoQuery,
} = apiSlice;
