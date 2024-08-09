import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProbabilityChart from "./graphgen";
import Dashimg from "./dashimg";
const sampleData1 = [
    { timestamp: 1627843200000, probability: 0.4 },
    { timestamp: 1627929600000, probability: 0.6 },
    { timestamp: 1628016000000, probability: 0.8 },
    { timestamp: 1628102400000, probability: 0.5 },
    { timestamp: 1628188800000, probability: 0.9 },
  ];
  const sampleData2 = [
    { timestamp: 1627843200000, probability: 0.9 },
    { timestamp: 1656569600000, probability: 0.9 },
    { timestamp: 1628016000000, probability: 0.9 },
    { timestamp: 1628102400000, probability: 0.9 },
    { timestamp: 1628188800000, probability: 0.9 },
  ];
function Routing()
{  
   return (
    <div>
        <Routes>
          <Route path="/" element={<Dashimg />} />
          <Route path="/switch" element={<ProbabilityChart data={sampleData2} />} />
          <Route path="/door" element={<ProbabilityChart data={sampleData1} />} />
          <Route path="/basintap" element={<ProbabilityChart data={sampleData2} />} />
          <Route path="/bathroomtap" element={<ProbabilityChart data={sampleData1} />} />
          <Route path="/shower" element={<ProbabilityChart data={sampleData2} />} />
          <Route path="/flush" element={<ProbabilityChart data={sampleData1} />} />
          <Route path="/walker" element={<ProbabilityChart data={sampleData2} />} />
         
        </Routes>
      </div>
     );

}
export default Routing;