import React from "react";
import Reactdom from "react-dom/client";
const ele=document.getElementById("root");
import ProbabilityChart from "./graphgen";
const k=Reactdom.createRoot(ele);
import Sidenav from "./sidenav";

k.render( <Sidenav />
  );