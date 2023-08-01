import React from "react";

const ListItem = ({ item, removeItem, editItem }) => {
  const { name, completed } = item;
  return (
    <ul>
      <li className="single-item">
        <input type="checkbox" onChange={editItem} />
        <p>{name}</p>
        <button className="remove-btn" onClick={removeItem}>
          remove
        </button>
      </li>
    </ul>
  );
};

export default ListItem;
