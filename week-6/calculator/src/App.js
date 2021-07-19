import React, { Component } from 'react';
import './styles.css';
import Keypad from './components/keypad.js'
import Answer from './components/Answer.js';

class App extends Component{
    constructor(){
        super();

        this.state = {
            answer: ""
        }
    }

    onClick = button => {
        if(button === "="){
            this.solve()
        }
        else if(button === "AC"){
            this.allClear()
        }
        else if(button === "DEL"){
            this.DEL()
        }
        else{
            this.setState({
                answer: this.state.answer + button
            })
        }
    }





    solve = () => {
        this.setState({
            answer: (eval(this.state.answer) || "") + ""
        })
    };

    allClear = () => {
        this.setState({
            answer: ""
        })
    };

    DEL = () => {
        this.setState({
            answer: this.state.answer.slice(0, -1)
        })
    };
    

    render(){
        return(
            <div>
                <Answer answer={this.state.answer}/>
                <Keypad  onClick={this.onClick}/>
            </div>
        );
    }
}

export default App;