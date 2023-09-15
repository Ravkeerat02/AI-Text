import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApikey = import.meta.env.VITE_RAPID_API_KEY;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders(headers) {
      headers.set("X-RapidAPI-Key", rapidApikey);
      headers.set(
        "X-RapidAPI-HOST",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
  //   to be called
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        //   makes it easy to read any kind of URL
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

// to be used on demand
export const { useLazyGetSummaryQuery } = articleApi;
