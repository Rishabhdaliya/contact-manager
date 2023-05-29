import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// setting base URL and token in header
const baseQuery = fetchBaseQuery({
  baseUrl: "https://disease.sh",
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});
