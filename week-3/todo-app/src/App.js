import React from "react";
import Todo2Card from "./todoCard";
import todos from "./store.js";
import "./todo.css";

function App2() {
  const todoCards = todos.map((item, index) => (
    <Todo2Card key={index} id={index + 1} text={item.text} />
  ));
  return (
    <div>
      <div className="task-input"></div>
      <div id="title">
        React Todo app Week 3
        <div className="todo-card">
          <div>
            <input id="input" type="text" placeholder="What to do?"></input>
            <button className="Submit">Add to task</button>
          </div>
          {todoCards}
        </div>
      </div>
    </div>
  );
}

export default App2;
