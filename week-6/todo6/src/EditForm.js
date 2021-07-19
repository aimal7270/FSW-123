import { useContext } from "react";


const EditForm = ({editToDo, currentValue, id}) => {   
    const [userInput, setUserInput] = useContext(); 
    
    const handleChange =e=> {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit=e=>{
        var input = e.currentValue.children[0].children[0];
        if(input.value !== ""){
            e.preventDefault();
            editToDo(id,userInput);
            setUserInput();
        }else{alert('Please enter a value')}
        }  

    return(
        <form id='form' name='form' onSubmit={handleSubmit} > 
                <label id="label"> 
                Edit Task: 
                <input type = "text" name='text' value={userInput} onChange={handleChange}/>
                </label>
                <button type="Submit">Submit</button>
            </form>
        )
}

export default EditForm