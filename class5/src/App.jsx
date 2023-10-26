import React from "react";
import "./App.css";
import { useState, useCallback, useRef } from "react";
import { useEffect } from "react";
const App = () => {
  const [length, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, SetCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useref hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!~@#$%^&*+_-";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(); // password select range
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(()=>{
      passwordGenerator();
    }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <div>
      <div className="w-2/4 align-middle mx-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-2 text-orange-500 bg-gray-600">
        <h2 className="text-center text-lg text-white mb-2">
          Password Generator
        </h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPassword} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name=""
              id=""
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e)=>setLenght(e.target.value)}
            />
            <label htmlFor="">Lenght {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" name="" id="numberInput" onChange={()=>{
              setNumberAllowed((prev) =>!prev);
            }} defaultValue={numberAllowed} />
            <label htmlFor="">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" name="" id="characterInput" defaultValue={characterAllowed} onChange={()=>{
              SetCharAllowed((prev) => !prev);
            }} />
            <label htmlFor="">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
