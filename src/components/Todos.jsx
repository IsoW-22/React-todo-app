import { useState } from "react";

function Todos() {
  const [todoList, SetTodoList] = useState([]);

  function handleMarkDone(index, isDone) {
    SetTodoList(
      todoList.map((todo) => {
        if (todo.id === index) {
          return { ...todo, isDone: isDone };
        } else {
          return todo;
        }
      })
    );
  }

  function handleAddTodo() {
    SetTodoList([...todoList, { id: crypto.randomUUID(), isDone: false }]);
  }

  function handleDeleteTodo(index) {
    SetTodoList(todoList.filter((item) => item.id !== index));
    console.log(todoList);
  }

  const listItems = todoList.map((todo) => (
    <div className={todo.isDone ? "done-todo" : "todo"} key={todo.id}>
      <input
        type="checkbox"
        onChange={(e) => handleMarkDone(todo.id, e.target.checked)}
        checked={todo.isDone}
      />
      <input type="text" />
      <button onClick={() => handleDeleteTodo(todo.id)}>del</button>
      <button>fav</button>
    </div>
  ));
  return (
    <div className="body">
      <div>{listItems}</div>
      <button onClick={handleAddTodo} className="add-todo">
        ADD TODO
      </button>
    </div>
  );
}

export default Todos;