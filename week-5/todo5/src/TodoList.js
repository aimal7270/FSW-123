import React from "react";
import EditForm from "./editForm";

class TodoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
  }
  editbutton() {
    this.setState({ edit: true });
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
          <input
            id={this.props.id}
            type="checkbox"
            onClick={() => {
              this.completeTodo();
            }}
            checked={this.props.isComplete}
          />
          {this.state.edit === true ? (
            <EditForm
              editToDo={this.props.editTodo}
              currentValue={this.props.text}
              id={this.props.id}
            />
          ) : (
            <label
              style={{
                textDecoration:
                  this.props.isComplete === true ? "line-through" : "none",
              }}
              for={this.props.id}
            >
              {this.props.text}
            </label>
          )}

          <button
            id="delete"
            onClick={() => {
              this.editbutton();
            }}
          >
            Edit
          </button>

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
