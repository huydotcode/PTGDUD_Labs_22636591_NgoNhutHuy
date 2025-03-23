import { useCallback, useReducer } from "react";
import Todo from "./components/Todo";
import TodoStats from "./components/TodoStats";
import "./App.css";

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

type TodoAction =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "DELETE_TODO"; id: number }
  | { type: "CLEAR_COMPLETED" };

const todoReducer = (state: TodoItem[], action: TodoAction): TodoItem[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "CLEAR_COMPLETED":
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleAddTodo = useCallback((text: string) => {
    dispatch({ type: "ADD_TODO", text });
  }, []);

  const handleToggleTodo = useCallback((id: number) => {
    dispatch({ type: "TOGGLE_TODO", id });
  }, []);

  const handleDeleteTodo = useCallback((id: number) => {
    dispatch({ type: "DELETE_TODO", id });
  }, []);

  const handleClearCompleted = useCallback(() => {
    dispatch({ type: "CLEAR_COMPLETED" });
  }, []);

  return (
    <div className="app">
      <h1>React Hooks Demo</h1>
      <div className="app-container">
        <Todo
          todos={todos}
          onAddTodo={handleAddTodo}
          onToggleTodo={handleToggleTodo}
          onDeleteTodo={handleDeleteTodo}
        />
        <TodoStats todos={todos} onClearCompleted={handleClearCompleted} />
      </div>
    </div>
  );
}

export default App;
