import { apiSlice } from "../../app/apiSlice";

export const ContactApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllDiseases: builder.query({
      query: () => ({
        url: "/v3/covid-19/all",
        method: "GET",
      }),
    }),
    getByCountry: builder.query({
      query: () => ({
        url: "/v3/covid-19/countries",
        method: "GET",
      }),
    }),
    getHistory: builder.query({
      query: () => ({
        url: "/v3/covid-19/historical/all?lastdays=all",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllDiseasesQuery,
  useGetByCountryQuery,
  useGetHistoryQuery,
} = ContactApiSlice;
