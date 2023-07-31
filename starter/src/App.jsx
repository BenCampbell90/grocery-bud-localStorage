import { useState } from "react";
import List from "./List";

const App = () => {
  const [items, setItems] = useState(null);
  const [form, setForm] = useState("");

  const handleSubmit = () => {};

  const handleChange = (e) => {};

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div className="form-control">
          <input className="form-input" value={form} onChange={handleChange} />
          <button className="btn" type="submit">
            Add Item
          </button>
        </div>
      </form>
      <List />
    </section>
  );
};

export default App;
