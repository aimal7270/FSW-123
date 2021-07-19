import React from 'react'
import TodoCard from './todocard'
import todos from './store.js'
import './todo.css'
import ToDoForm from './Todoform';

const {v4: uuidv4} = require('uuid');


class App extends React.Component{
    constructor(){
        super()
        this.state ={
            arrayTodos: todos.map((item, index)=>
        ({
            key: index,
            id : item.id,
            text: item.text,
            isComplete :item.isComplete,
        })
            )}}

  

 completeTodo = (e) => {
    if(e){
        let updateTodosList = [...this.state.arrayTodos]
        let index = updateTodosList.findIndex( item => item.id === e);
        let updatedTodo = {...updateTodosList[index]}
        
        if(updatedTodo.isComplete){
            updatedTodo.isComplete = false
        } 
        else{
            updatedTodo.isComplete = true
        }
        updateTodosList[index] = updatedTodo
        this.setState({
            arrayTodos: updateTodosList
        })
    }
 }

 deleteTodo = e => {
    if  (e) {
        let deletedTodos = [...this.state.arrayTodos]
        let index = deletedTodos.findIndex(item => item.id === e)
        deletedTodos.splice(index,1)
        this.setState({
            arrayTodos: deletedTodos
        })
    }
}
     
addToDo = (userInput) =>{
        let copy = [...this.state.arrayTodos];
        copy.push( {id: uuidv4(), text: userInput, isComplete:false, key: copy.length +1});
        this.setState({
            arrayTodos: copy
        })
        
}
 editToDo = (id, words) =>{
    let updateTodosList = [...this.state.arrayTodos]
    let changeMe = updateTodosList.findIndex(todo => todo.id === id)
    updateTodosList[changeMe].text = words;
        this.setState({
            arrayTodos: updateTodosList
        }) 
} 

    render(){
        const todoCards = this.state.arrayTodos.map((item, index)=> {
            return(
            <TodoCard
                key = {item.key}
                id = {item.id}
                text ={item.text}
                isComplete = {item.isComplete}
                completeTodo = {this.completeTodo}
                editToDo = {this.editToDo}
                deleteTodo = {this.deleteTodo}
            />
        )})
        return(
            <div>
                <div id="title">TODO 6</div>
                <ToDoForm addToDo={this.addToDo}/>
                {todoCards}

            
            </div>
        )
    }
}
export default App