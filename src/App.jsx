import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-[550px] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
