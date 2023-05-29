import React from "react";
import Layout from "../Layout/Layout";
import LineChart from "./LineCharts";
import "./Dashboard.css";
import {
  useGetAllDiseasesQuery,
  useGetByCountryQuery,
  useGetHistoryQuery,
} from "../../redux/features/contact/ContactApiSlice";
import { MapCharts } from "./Maps/MapCharts";

interface Disease {
  id: number;
  name: string;
  // Other properties
}

interface QueryResult {
  data: Disease[];
  error: Error | null;
  isLoading: boolean;
}

const Dashboard: React.FC = () => {
  const { data, error, isLoading } = useGetAllDiseasesQuery("");
  const { data: countryData } = useGetByCountryQuery("");
  const { data: historyData } = useGetHistoryQuery("");

  const labelComp = {
    label: "Dashboard",
  };

  const finalData = [
    {
      id: "Disease",
      color: "hsl(343, 70%, 50%)",
      data: [
        { x: "activePerOneMillion", y: data?.activePerOneMillion },
        { x: "casesPerOneMillion", y: data?.casesPerOneMillion },
        { x: "deathsPerOneMillion", y: data?.deathsPerOneMillion },
        { x: "recoveredPerOneMillion", y: data?.recoveredPerOneMillion },
        { x: "testsPerOneMillion", y: data?.testsPerOneMillion },
      ],
    },
  ];

  const prop = {
    finalData,
  };

  return (
    <div>
      <div>
        <Layout {...labelComp}>
          <div className="dashboard__line">
            <h3 className="text-center font-semibold ">
              Disease (per million)
            </h3>
            {data && <LineChart {...prop} />}
          </div>
          <div className="dashboard__maps">
            <h3 className="text-center mb-5 font-semibold ">Country wise </h3>
            {countryData && <MapCharts data={countryData} />}{" "}
            {/* Pass the 'data' prop */}
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Dashboard;
