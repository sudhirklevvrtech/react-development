import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full flex flex-wrap h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap fixed justify-center bottom-14 inset-x-0 px-2">
        <div className="flex flex-wrap px-3 py-3 rounded-full justify-center gap-3 bg-white">
          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={()=>setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={()=>setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={()=>setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "maroon" }}
            onClick={()=>setColor("maroon")}

          >
            Maroon
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
            onClick={()=>setColor('orange')}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "violet" }}
            onClick={()=>setColor('violet')}
          >
            Violet
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "crimson" }}
            onClick={()=>setColor("crimson")}
          >
            Crimson
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default App;
