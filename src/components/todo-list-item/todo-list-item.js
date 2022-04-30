import React from "react";
import "./todo-list-item.css";

export default class TodoListItem extends React.Component {
  render() {
    let { label, onDelete, done, important, onToggleImportant, onLableClick } =
      this.props;

    let className = "todo-list-item";
    if (important) {
      className += " important";
    }

    if (done) {
      className += " done";
    }
    return (
      <span className={className}>
        <span className="todo-list-item-label" onClick={onLableClick}>
          {label}
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDelete}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
