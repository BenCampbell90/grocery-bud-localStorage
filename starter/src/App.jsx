import { useState } from "react";
import List from "./List";
import Form from "./Form";
import { nanoid } from "nanoid";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: nanoid(),
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    console.log(items);
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <List items={items} />
    </section>
  );
};

export default App;
