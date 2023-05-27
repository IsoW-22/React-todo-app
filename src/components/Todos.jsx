import { useState } from "react";

let nextId = 0;

function Todos() {
  const [todoList, SetTodoList] = useState([]);

  function handleAddTodo() {
    SetTodoList(
      [...todoList, { id: nextId++ }]
    );
  }

  function delTodo(index) {
    SetTodoList(
      todoList.filter(item =>
        item.id !== index
      )
    );
    console.log(todoList);
  }

  const listItems = todoList.map((todo, index) =>
    <div className="todo" key={index} index={index}>
      {/* <input type="checkbox" onClick={() => markDone(index)} /> */}
      <input type="text" />
      <button onClick={() => delTodo(index)}>del</button>
      <button>fav</button>
    </div>
  );
  return (
    <div className="body">
      <div>{listItems}</div>
      <button onClick={handleAddTodo} className="add-todo">ADD TODO</button>
    </div>
  );
}

export default Todos;
