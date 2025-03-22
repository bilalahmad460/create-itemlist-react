import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { WelcomeMsg } from "./components/WelcomeMsg";
import { useState } from "react";

function App() {
  const intialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "23/3/2025",
    },
    {
      name: "Buy Egg",
      dueDate: "23/3/2025",
    },
    {
      name: "Buy Elephent",
      dueDate: "23/4/2025",
    },
  ];

  const [todoItem, setTodoItem] = useState([]);
  const [localState, setLocalState] = useState("i am software engineer");
  const handleNewItem = (itemName, itemDate) => {
    const newTodoItems = [...todoItem, { name: itemName, dueDate: itemDate }];
    setTodoItem(newTodoItems);
    setLocalState(itemName);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItem.filter((item) => item.name !== todoItemName);
    setTodoItem(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName name="Bilal khan" profess={localState} />
      <AddTodo onNewItem={handleNewItem} />
      {todoItem == 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems
        todoItems={todoItem}
        onDeletClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
