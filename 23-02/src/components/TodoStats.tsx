import React, { useMemo, useCallback } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoStatsProps {
  todos: Todo[];
  onClearCompleted: () => void;
}

const TodoStats: React.FC<TodoStatsProps> = React.memo(
  ({ todos, onClearCompleted }) => {
    // Using useMemo to calculate statistics
    const stats = useMemo(() => {
      console.log("Calculating stats..."); // To demonstrate memoization
      return {
        total: todos.length,
        completed: todos.filter((todo) => todo.completed).length,
        incomplete: todos.filter((todo) => !todo.completed).length,
      };
    }, [todos]);

    // Using useCallback for event handlers
    const handleClearCompleted = useCallback(() => {
      console.log("Clear completed callback"); // To demonstrate callback memoization
      onClearCompleted();
    }, [onClearCompleted]);

    return (
      <div className="todo-stats">
        <div className="stats-container">
          <div className="stat-item">
            <span>Total:</span>
            <span>{stats.total}</span>
          </div>
          <div className="stat-item">
            <span>Completed:</span>
            <span>{stats.completed}</span>
          </div>
          <div className="stat-item">
            <span>Incomplete:</span>
            <span>{stats.incomplete}</span>
          </div>
        </div>
        <button
          onClick={handleClearCompleted}
          className="clear-button"
          disabled={stats.completed === 0}
        >
          Clear Completed
        </button>
      </div>
    );
  }
);

TodoStats.displayName = "TodoStats";

export default TodoStats;
