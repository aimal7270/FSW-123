import React from 'react';

function Todo2Card(props){
    let id =`card${props.id}`
    return(
     <div id="list">
         <div>
             <input id={id} type='checkbox' />
             <label for={id}>{props.text}</label>
         </div>
     </div>
    )}

export default Todo2Card