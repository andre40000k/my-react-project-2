import React from "react";
import ControlledForm from "./components/ControlledComponent";
import UnControlledForm from "./components/UncontrolledComponent";
import DataFetcher from "./components/DataFetcherComponent";
import DataFetchingAXIOS from "./components/DataFetcherComponentAXIOS";

const App = () => {
  return (
    <div style={{ margin: "50px" }}>
      <h1>Controlled and Uncontrolled Components</h1>

      <h2 style={{ color: "blue" }}>Controlled Form</h2>
      <ControlledForm />

      <h2 style={{ color: "red" }}>Uncontrolled Form</h2>
      <UnControlledForm />

      <h2 style={{ color: "green" }}>Fetched Data</h2>
      <DataFetcher/>

      <h2 style={{ color: "green" }}>Fetched Data AXIOS</h2>
      <DataFetchingAXIOS />
    </div>
  );
};

export default App;
