function TodoItem({ todoName, todoDate, onDeletClick }) {
  return (
    <div className="container">
      <div className="row bk-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger bk-button"
            onClick={() => onDeletClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
