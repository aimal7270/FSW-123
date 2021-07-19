import React from "react";
class Button extends React.Component{
    
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.state = {editing: false};
    }
    handleEdit(){
        this.setState({editing: true});
    }
    handleCancel(){
        this.setState({editing: false});
    }
   

    render(){
        const editing = this.state.editing;
        let button;
        if (editing){
            button = <button onClick={this.handleCancel}>Cancel</button>
        }else{
            button = <button onClick={this.handleEdit}>Edit</button>
        }
        return(
                {button}
        )
    }
}

export default Button