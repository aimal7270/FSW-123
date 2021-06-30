import React from "react";
import TodoForm from "./TodoForm";

function TodoList({ todos }) {
  return (
    <ul>
      {TodoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
