import React from "react";
import Counter from "./components/Counter";
import { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    <CounterProvider>
      <>
        <h1>Counter Use Reducer</h1>

        <Counter />
      </>
    </CounterProvider>
  );
}

export default App;
