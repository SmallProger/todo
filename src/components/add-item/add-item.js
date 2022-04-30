import React, { useState } from "react";
import "./add-item.css";

export default function AddItem({ onAddItemList }) {
  let [label, changeLabel] = useState();
  function onLabelChange(e) {
    changeLabel(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onAddItemList(label);
    changeLabel("");
  }
  return (
    <form className="add-item-field d-flex" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control add-item-field-input"
        placeholder="write your task here"
        onChange={onLabelChange}
      ></input>
      <button className="add-item-field-btn btn">Add-item</button>
    </form>
  );
}
