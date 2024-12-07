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
  }),
});

export const { useSignUpMutation, useSignInMutation, useLogOutQueryMutation } =
  apiSlice;
