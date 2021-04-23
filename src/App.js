import React, { useState, useEffect } from "react";
//import { data } from "./dblocal/db";
import TableContainer from "./components/table/TableContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { getData } from "./http/query";

function App() {

  const [data, setData]=useState([]);

  useEffect(()=>{
    getData().then(res=> setData(res))
  },[])

  if(!data) return <p>Loading...</p>
  
  return <TableContainer data={data} />;
}

export default App;
