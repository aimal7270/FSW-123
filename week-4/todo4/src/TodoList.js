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
          <input
            id={this.props.id}
            type="checkbox"
            onClick={() => {
              this.completeTodo();
            }}
            checked={this.props.isComplete}
          />
          <label
            style={{
              textDecoration:
                this.props.isComplete === true ? "line-through" : "none",
            }}
            for={this.props._id}
          >
            {this.props.text}
          </label>

          <button
            id="delete"
            onClick={() => {
              this.deleteTodo();
            }}
          >
            Delete
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
