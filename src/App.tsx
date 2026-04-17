import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="setup" element={<Setup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
