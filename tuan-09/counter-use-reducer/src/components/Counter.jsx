import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;
