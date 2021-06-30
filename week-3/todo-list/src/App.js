import  React, {useEffect, useState } from "react"
import './App.css';
import TodoForm from "./component/TodoForm";
import uuid from "uuid;"

function App() {
  const [todos, setTodos] = useState([]);


  function addTodo(todo) {
    setTodo([todo, ...todos]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos}/>
        <p>Todo</p>
      </header>
    </div>
  );
}

export default App;
