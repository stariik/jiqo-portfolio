import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import BookingHub from "./Pages/BookingHub";
import BookingHubApp from "./Pages/BookingHubApp";
import Marketino from "./Pages/Marketino";
import Mekobre from "./Pages/Mekobre";
import Trustster from "./Pages/Trustster";
import TeaCorner from "./Pages/TeaCorner";
import VisualPlayground from "./Pages/VisualPlayground";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/visualplayground" element={<VisualPlayground />} />
          <Route path="/marketino" element={<Marketino />} />
          <Route path="/mekobre" element={<Mekobre />} />
          <Route path="/teacorner" element={<TeaCorner />} />
          <Route path="/trustster" element={<Trustster />} />
          <Route path="/bookinghub" element={<BookingHub />} />
          <Route path="/bookinghubapp" element={<BookingHubApp />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
