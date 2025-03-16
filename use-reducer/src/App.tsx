import { useReducer } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const reducer = (state: { count: number }, action: { type: string }) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
      };
    case "sub":
      return {
        ...state,
        count: state.count - 1,
      };
    case "mul":
      return {
        ...state,
        count: state.count * 2,
      };
    case "div":
      return {
        ...state,
        count: state.count / 2,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={reactLogo} className="App-logo" alt="logo" />
          <img src={viteLogo} className="App-logo" alt="logo" />

          <p>
            <button onClick={() => dispatch({ type: "add" })}>+</button>
            <button onClick={() => dispatch({ type: "sub" })}>-</button>
            <button onClick={() => dispatch({ type: "mul" })}>*</button>
            <button onClick={() => dispatch({ type: "div" })}>/</button>
          </p>
          <p>{state.count}</p>
        </header>
      </div>
    </>
  );
}

export default App;
