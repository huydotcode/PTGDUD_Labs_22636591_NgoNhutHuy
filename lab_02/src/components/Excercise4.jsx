import { useState } from "react";

const Excercise4 = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, value]);
    setValue("");
  };

  const handleRemove = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleRemoveAll = () => {
    setTodos([]);
  };

  return (
    <div>
      <h5>Excercise4: Todo App</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <br />

        <button type="submit">Thêm</button>
        <button
          style={{
            marginLeft: "8px",
          }}
          type="button"
          onClick={handleRemoveAll}
        >
          Xóa tất cả
        </button>
      </form>

      <ul
        style={{
          maxHeight: "50vh",
          overflowY: "scroll",
        }}
      >
        {todos.map((todo, index) => (
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            key={index}
          >
            <p>{todo}</p>
            <button onClick={() => handleRemove(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Excercise4;
