import React, { useState } from "react";

const Excercize3 = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(0);

  const handleChangeOperator = (e) => {
    setOperator(e.target.value);
  };

  const handleClick = () => {
    switch (operator) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(a / b);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h5>Excercise 3</h5>
      <input type="number" onChange={(e) => setA(parseInt(e.target.value))} />
      <br />
      <input type="number" onChange={(e) => setB(parseInt(e.target.value))} />
      <br />
      <div
        style={{
          display: "flex",
          gap: "16px",
        }}
      >
        <input
          type="radio"
          name="operator"
          value="+"
          onChange={handleChangeOperator}
        />{" "}
        +
        <input
          type="radio"
          name="operator"
          value="-"
          onChange={handleChangeOperator}
        />{" "}
        -
        <input
          type="radio"
          name="operator"
          value="*"
          onChange={handleChangeOperator}
        />{" "}
        *
        <input
          type="radio"
          name="operator"
          value="/"
          onChange={handleChangeOperator}
        />{" "}
        /
      </div>
      <br />
      <button onClick={handleClick}>Calculate</button>
      <br />
      <span>Kết quả = {result}</span>
    </div>
  );
};

export default Excercize3;
