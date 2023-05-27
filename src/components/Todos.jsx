import { useState } from "react";

let nextId = 0;

function Todos() {
  const [todoList, SetTodoList] = useState([]);
  function handleAddTodo() {
    SetTodoList(
      [...todoList, { id: nextId++ }]
    );
  }

  const listItems = todoList.map((todo) => <div key={todo.id} className="todo"></div>);
  return (
    <div className="body">
      <div>{listItems}</div>
      <button onClick={handleAddTodo}>ADD TODO</button>
    </div>
  );
}

export default Todos;
