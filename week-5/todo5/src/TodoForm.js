import React, { useState } from "react";
// import EditForm from "./editForm";

const ToDoForm = ({ addToDo }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    var input = e.currentTarget.children[0].children[0];
    //console.log(e.currentTarget.children[0].children[0].value)
    if (input.value !== "") {
      e.preventDefault();
      addToDo(userInput);
      setUserInput("");
    } else {
      alert("Need to add a task first !");
    }
  };

  return (
    <div className="container">
      <form id="form" name="form1" onSubmit={handleSubmit}>
        <label id="label">
          Add Task:
          <input
            id="new-task"
            type="text"
            name="text"
            value={userInput}
            onChange={handleChange}
          />
        </label>
        <button id="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;