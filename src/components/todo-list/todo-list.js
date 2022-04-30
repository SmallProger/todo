import React from "react";
import "./todo-list.js";

import TodoListItem from "../todo-list-item/todo-list-item";
export default function TodoList({
  todos,
  onDelete,
  onLableClick,
  onToggleImportant,
  onAddItemList,
}) {
  let listElems = [];
  listElems = todos.map((element) => {
    let { id, ...elemData } = element;
    return (
      <li key={id} className="todo-list-item list-group-item">
        <TodoListItem
          {...elemData}
          onDelete={() => onDelete(id)}
          onLableClick={() => onLableClick(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onAddItemList={() => onAddItemList(id)}
        />
      </li>
    );
  });
  return <ul className="list-group">{listElems}</ul>;
}
