import { Home } from "./pages/Home";
import { About } from "./pages/About";

import { Routes, Route } from "react-router-dom";

export function Router() {
  return (
    <Routes>
      <Route path="/pedrofrancodev/" element={<Home />} />
      <Route path="/pedrofrancodev/about" element={<About />} />
    </Routes>
  )
}