/* eslint-disable react/prop-types */
const TodoItem = ({ item, index, items, setItems }) => {
  const handleDelete = () => {
    const newItems = items.filter((item) => item !== items[index]);
    setItems(newItems);
    console.log(newItems);
  };

  const handleMarkAsDone = () => {
    const newItems = items.map((item) => {
      if (item === items[index]) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <div className="todo-item d-flex justify-content-between align-items-center p-5 border mt-3">
      <h1 className={item.isDone ? "text-decoration-line-through" : ""}>
        {item.text}
      </h1>
      <div className="btnGrp">
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
        <button className="btn btn-success" onClick={handleMarkAsDone}>
          Mark As Done
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
