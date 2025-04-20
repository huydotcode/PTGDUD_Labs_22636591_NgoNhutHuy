// src/Counter.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./actions/counterActions";

const Counter = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
