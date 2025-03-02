import React, { useState } from "react";

const Excersize2 = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);

  const changeA = (e) => {
    setA(parseInt(e.target.value));
  };

  const changeB = (e) => {
    setB(parseInt(e.target.value));
  };

  return (
    <div>
      <h5>Excercise 2: Cộng 2 số</h5>

      <input type="number" onChange={changeA} />
      <br />

      <input type="number" onChange={changeB} />
      <br />

      <button onClick={() => setResult(a + b)}>Add</button>
      <br />

      <span>Kết quả = {result}</span>
    </div>
  );
};

export default Excersize2;
