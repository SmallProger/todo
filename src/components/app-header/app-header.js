import React from "react";
import "./app-header.css";

class AppHeader extends React.Component {
  render() {
    return (
      <div className="app-header d-flex">
        <h1>Todo List</h1>
        <span>
          {this.props.todo} more to do, {this.props.done} done
        </span>
      </div>
    );
  }
}

export default AppHeader;
