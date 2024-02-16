import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Components/state";
import Postcode from "./Pages/Postcode";
import Statistics from "./Pages/Statistics";
import Who from "./Pages/Who";
import Life from "./Pages/Life";
import Scale from "./Pages/Scale";
import Affect from "./Pages/Affect";
import Confirmation from "./Pages/Confirmation";
import ThankYou from "./Pages/ThankYou";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Postcode />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/who" element={<Who />} />
          <Route path="/life" element={<Life />} />
          <Route path="/scale" element={<Scale />} />
          <Route path="/affect" element={<Affect />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
