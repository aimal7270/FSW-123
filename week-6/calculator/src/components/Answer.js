import React, {Component} from "react";

class Answer extends Component{
    render(){
        let {answer} = this.props;
        return(
            <div className="answer">
                <p>{answer}</p>
            </div>
        )
    }
}

export default Answer