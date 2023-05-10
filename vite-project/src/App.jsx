import { useState } from "react";

import "./App.css";
import Navbar from "./Navbar";
import MainSec from "./MainSec";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <div className="main">
        <MainSec />
      </div>
    </>
  );
}

export default App;
