import { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";

function AddTodo({ onNewItem }) {
  const [todoItem, setTodoItem] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoItem(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoItem, todoDate);
    setTodoItem("");
    setTodoDate("");
  };

  return (
    <div className="container">
      <div className="row bk-row">
        <div className="col-6">
          <input
            type="text"
            value={todoItem}
            placeholder="Enter Todo here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success bk-button"
            onClick={handleAddButtonClicked}
          >
            <IoAddCircleSharp />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
