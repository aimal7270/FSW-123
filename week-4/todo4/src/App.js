import React from 'react'
import TodoList from './TodoList';
import todos from './store.js'
import './Todo.css'
import ToDoForm from './TodoForm';
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
        copy.push( {id: uuidv4(), text: userInput, isComplete:false, key: this.state.arrayTodos.length +1});
        this.setState({
            arrayTodos: copy
        })
        
}


    render() {
        const todoList = this.state.arrayTodos.map((item, index)=> {
            return(
            <TodoList                key = {item.key}
                id = {item.id}
                text ={item.text}
                isComplete = {item.isComplete}
                completeTodo = {this.completeTodo}
                deleteTodo = {this.deleteTodo}
            />
        )})
        return(
            <div>
                <div id="title">TODO-4</div>
                <ToDoForm addToDo ={this.addToDo}/>
                {todoList}
            
            </div>
        )
    }
}
export default App