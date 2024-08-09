import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Routing from "./routes";
import Navi from "./navi";
function Sidenav()
{  
   return (
   
   <Router>
   <Navi />
    <Routing  />
    </Router> );

}
export default Sidenav;