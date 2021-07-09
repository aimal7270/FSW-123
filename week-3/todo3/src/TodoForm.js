import React,  {useState} from 'react';


const ToDoForm = ({addToDo}) => {
    const [userInput, setUserInput] = useState('');

    const handleChange =e =>{
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit =e =>{
    if(e.currentTarget.value !== ""){
        e.preventDefault();
        addToDo(userInput);
        setUserInput("");
    }else{alert('Please enter a value')}
    }  

    return(
        <div className="container">
            <form id='form' name='form' onSubmit={handleSubmit} > 
                <label id="label"> 
                Add Task: 
                <input id="new-task" type = "text" name='text' value={userInput} onChange={handleChange}/>
                </label>
                <button id="button" type="Submit">Submit</button>
                </form>
        </div>
        
    )
}

export default ToDoForm