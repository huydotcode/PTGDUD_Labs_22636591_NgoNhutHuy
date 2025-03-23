import React, { useRef, useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoProps {
  todos: Todo[];
  onAddTodo: (text: string) => void;
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({
  todos,
  onAddTodo,
  onToggleTodo,
  onDeleteTodo,
}) => {
  // useState for input field
  const [inputValue, setInputValue] = useState("");

  // useRef for input focus
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue("");
      inputRef.current?.focus();
    }
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
          className="todo-input"
        />
        <button type="submit" className="add-button">
          Add Todo
        </button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => onDeleteTodo(todo.id)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
