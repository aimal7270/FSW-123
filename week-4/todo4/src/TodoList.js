import React from "react";

class TodoCard extends React.Component {
  constructor(props) {
    super(props);
  }

  completeTodo() {
    this.props.completeTodo(this.props.id);
  }
  deleteTodo() {
    this.props.deleteTodo(this.props.id);
  }

  render() {
      
    return (
      <div id="list">
        <div className="delete-button">
          <label for={this.props._id}>{this.props.text}</label>
          <input
            id={this.props.id}
            type="checkbox"
            onClick={() => {
              this.completeTodo();
            }}
            checked={this.props.isComplete}
            
          />
          <button
            id="delete"
            onClick={() => {
              this.deleteTodo();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
export default TodoCard;
