/* eslint-disable react/prop-types */
import { useState } from "react";

export function ToDoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  // handles the form submit button
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    // clears out the input text after submit button is clicked
    setNewItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
