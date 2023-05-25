import { useState } from "react";
import TodoItem from "./todoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const handleAddTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ text: "", isDone: false });
  };

  return (
    <div>
      <input
        type="text"
        className="form-control mt-3"
        placeholder="Enter Todo"
        value={todo.text}
        onChange={(e) => setTodo({ text: e.target.value, isDone: false })}
      />
      <button
        type="button"
        className="btn btn-primary mt-3 ms-3"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
      {todos.map((item, index) => (
        <TodoItem
          key={index}
          index={index}
          item={item}
          items={todos}
          setItems={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
