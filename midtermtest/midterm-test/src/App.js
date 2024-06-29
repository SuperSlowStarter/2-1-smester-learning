import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

function ReactHooks(props) {
  const [contents, setContents] = useState("This Is React");

  useEffect(() => {
    console.log("useEffect launch");
  });

  return (
    <div>
      <h2>{contents}</h2>
      <button onClick={() => setContents("No im jotdaeTa")}> Button </button>
    </div>
  );
}

export default ReactHooks;
