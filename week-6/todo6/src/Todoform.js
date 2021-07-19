//import {useContext} from 'react'
import {useState} from 'react'

const ToDoForm = ({addToDo}) => {
    const [userInput, setUserInput] = useState();

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
        <form id='form' name='form' onSubmit={handleSubmit} > 
                <label id="label"> 
                New Todo: 
                <input type = "text" name='text' value={userInput} onChange={handleChange}/>
                </label>
                <button type="Submit">Submit</button>
                </form>
    )
}

export default ToDoForm