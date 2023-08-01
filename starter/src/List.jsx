import React from "react";
import ListItem from "./ListItem";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        const { id } = item;
        return (
          <ListItem
            key={id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default List;
