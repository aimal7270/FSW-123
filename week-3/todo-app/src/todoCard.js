import React from 'react';

function TodoCard(props){
    let id =`card${props.id}`
    return(
     <div id="list">
         <div>
             <input id={id} type='checkbox'/>
             <label for={id}>{props.text}</label>
             <button type="submit"  id="check">✔</button>
             <button type="delete"></button>
         </div>
     </div>
    )}

export default TodoCard