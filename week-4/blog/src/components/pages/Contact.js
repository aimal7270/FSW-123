import React from "react";

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e){
        const target = e.target;
        const name = target.name;
        const value = target.value
        this.setState({[name]:value});
    }
    handleSubmit(){
        if (this.state.Name !== " " && this.state.email !== " "){
            alert(`Contact form submitted.\nName: ${this.state.Name}\nEmail: ${this.state.email} `)
        } else{alert('Please enter content')}
}
 
 
 
    render() {
    return(
        <div>
                <h1 id="title"> Contact Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                    <input type="text" name='Name' value={this.state.Name} onChange={this.handleInputChange}></input>
                    </label> <br></br>
                    <label>Email
                    <input type="text" name='email' value={this.state.email} onChange={this.handleInputChange}></input>
                    </label> <br></br>
                    <button>Submit</button>
                
                </form>
        </div>
        
    )
}}

export default Contact