import React, {useState} from "react"
import uuid from "uuid"

function TodoForm({setTodo}) {
    const [todo, setTodo] = useState({
        id: "",
        task: "finish this work",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefualt();
        if(todo.task.trim) {
            addTodo({...todo, id: uuid.v4()});

            setTodo({...todo, task:"finish this work"})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            name="task"
            type="text"
            value={todo.task}
            onChange={handleTaskInputChange}
            />
            <button type="submit">submit</button>
        </form>
    );
}

export default TodoForm;