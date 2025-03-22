import TodoItem from "./TodoItem";
import style from "./TodoItem.module.css";
const TodoItems = ({ todoItems, onDeletClick }) => {
  return (
    <div className={style.itemContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeletClick={onDeletClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
