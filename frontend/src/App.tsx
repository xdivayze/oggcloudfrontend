import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="bg-green-ogg-1 min-h-screen w-full">
      <div className="pt-14">
        <Navbar collapse={false} />
      </div>
    </div>
  );
}

export default App;
