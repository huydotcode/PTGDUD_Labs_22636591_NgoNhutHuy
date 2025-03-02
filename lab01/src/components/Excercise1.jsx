import { useState } from "react";

const Excersize1 = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const sumbit = (e) => {
    e.preventDefault();
    setName(text);
  };
  return (
    <div>
      <h5>Excercise 1: Hello</h5>
      <form onSubmit={sumbit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />

        <button>Click</button>
      </form>
      <br />

      <span>Hello, {name}</span>
    </div>
  );
};

export default Excersize1;
