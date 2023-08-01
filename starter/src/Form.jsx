import React, { useState } from "react";

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      alert("Enter a new item");
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  };

  const handleChange = (e) => {
    setNewItemName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          className="form-input"
          value={newItemName}
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
