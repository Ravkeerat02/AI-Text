import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery:fetchBaseQuery({
    baseUrl: ''
  })
  //   to be called
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (url) => `summary?url=${url}`,
    }),
  }),
});
