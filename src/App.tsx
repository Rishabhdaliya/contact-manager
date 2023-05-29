import React from "react";
import Layout from "./Components/Layout/Layout";
import Contact from "./Components/Contacts/Contact";
import { Route, Routes } from "react-router";
import Dashboard from "./Components/Charts/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
