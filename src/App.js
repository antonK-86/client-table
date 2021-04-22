import React from "react";
import { data } from "./dblocal/db";
import TableContainer from "./components/table/TableContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const mdata = data;
  return <TableContainer data={mdata} />;
}

export default App;
