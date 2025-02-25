import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Layout from "./Layout";
import Register from "./Routes/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
