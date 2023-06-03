import React from "react";
import News from "./News";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CurrentLocation from "./currentLocation";
import "./index1.css";


const App=()=>{
  return(<>
   <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/currentLocation" element={<CurrentLocation />} />
        <Route path="*" element={<Home />} />

      </Routes>
  </>);
}
export default App;