import React, { useState } from "react";
import "./App.css";
import ArrowL from "./images/arrow-left-round-24px.svg";
import ArrowR from "./images/arrow-right-round-24px.svg";

function App() {
  return (
    <div>
      <Header />
      <Counter />
      <Footer />
    </div>
  );
}

function Header() {
  const header = "Simple Counter App";
  return (
    <div>
      <h1>{header}</h1>
    </div>
  );
}

function Counter() {
  // count = current state
  // setCount = changed state
  // useState = sets default state to 0
  let [count, setCount] = useState(0);

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function reset() {
    setCount((prevCount) => (prevCount = 0));
  }

  return (
    <>
      <div className="counter">
        <img src={ArrowL} alt="arrow-l" onClick={decrement}></img>
        <div className="count">
          <span>{count}</span>
        </div>

        <img src={ArrowR} alt="arrow-r" onClick={increment}></img>
      </div>
      <div className="reset">
        <button className="reset-button" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}

function Footer() {
  const footer = "Created by Mudia Osagie ©";
  return (
    <div className="foo-center">
      <p className="foo">{footer}</p>
    </div>
  );
}

export default App;
