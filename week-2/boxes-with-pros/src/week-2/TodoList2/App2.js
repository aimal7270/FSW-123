import React from 'react'
import Todo2Card from './todocard2'
import todos from './store2.js'
import './todo2.css'

function App2(){
    const todoCards = todos.map((item, index)=>
        <Todo2Card
            key = {index}
            id = {index+1}
            text ={item.text}
            />
    )
    return(
        <div>
        <div id="title">To Do List Week 2</div>
        {todoCards}
        </div>
    )
}

export default App2
