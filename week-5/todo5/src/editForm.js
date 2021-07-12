import React, { useState } from "react";

const EditForm = ({ editToDo, currentValue, id }) => {
  const [userInput, setUserInput] = useState(currentValue);

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);

  };
  
  const handleSubmit = (e) => {
    var input = e.currentTarget.children[0].children[0];
    //console.log(e.currentTarget.children[0].children[0].value)
    if (input.value !== "") {
      e.preventDefault();
      editToDo(id, userInput);
      setUserInput(id, currentValue);
    } else {
      alert("Need to add a task first !");
    }
  };

  return (
    <div className="container">
      <form id="form" name="form" onSubmit={handleSubmit}>
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

export default EditForm;