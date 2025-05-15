import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import BookingHub from "./Pages/BookingHub";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/bookinghub" element={<BookingHub />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
