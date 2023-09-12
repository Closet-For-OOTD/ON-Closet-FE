import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("http://localhost:4000/").then((res) => console.log(res));
  }, []);
  return (
    <div>
      <p>This is Home</p>
    </div>
  );
}

export default App;
