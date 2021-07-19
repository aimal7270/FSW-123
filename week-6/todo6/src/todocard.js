import {useState} from 'react'
//import {useContext} from 'react'
import {useReducer} from 'react'

function TodoCard({text, id , isComplete, completeTodo, deleteTodo, editToDo}){
    const [edit, setEdit] = useReducer(false);
    const [words, setWords] = useState(text);
    
    const toggleEdit = ()=>{
        setEdit(!edit);
        setWords(text)
    }
    const handleEdit = e =>{
        setWords(e.target.value)
    }
    const handleUpdate = (id, words)=>{
        if(words !== ""){
            editToDo(id, words);
            toggleEdit();
        }else{alert('Please enter a value')}
    }
    let donezo= {textDecorationLine: 'none'}
    if(isComplete === true){
        donezo = {textDecorationLine: 'line-through'}
    }
    return(
     <div id="list">
         <div>
             <>
             <input 
                type='checkbox'
                name='checkbox'
                onClick={()=> {completeTodo(id)}} 
                checked={isComplete} />
            </>
            
            {!edit ?(
                <>
                <label for={id} style={donezo}>{text}</label>
                <button id='x' onClick={()=>deleteTodo(id)}>X</button>
                <button id='edit' onClick={() => toggleEdit()} disabled={isComplete}>Edit</button>
                </>
            ):(
                <>
                <input type='text' value={words} onChange={handleEdit} />
                <button id='submit' onClick={() => handleUpdate(id, words)}>Submit</button>
                <button id='cancel' onClick={()=> toggleEdit()}>Cancel</button>
                </>
            )}
            
         </div>
     </div>
    )} 


export default TodoCard