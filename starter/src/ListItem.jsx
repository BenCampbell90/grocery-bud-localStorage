const ListItem = ({ item, removeItem, editItem }) => {
  const { name, completed, id } = item;
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: completed && "line-through",
        }}
      >
        {name}
      </p>
      <button className="btn remove-btn" onClick={() => removeItem(id)}>
        remove
      </button>
    </div>
  );
};

export default ListItem;
