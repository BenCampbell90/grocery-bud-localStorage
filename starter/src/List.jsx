import React from "react";
import ListItem from "./ListItem";

const List = ({ items }) => {
  return (
    <div>
      <ListItem {items} />
    </div>
  );
};

export default List;
