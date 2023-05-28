import { useState } from "react";

function Todos() {
  const [todoList, SetTodoList] = useState([]);
  const [list, SetList] = useState("all");
  let listItems = todoList.map((todo) => (
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
  function Lists() {
    function handleDoneTodos() {
      const newTodoList = todoList.filter(todo => todo.isDone === true);
      listItems = newTodoList.map((todo) => (
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
    }
    return (
      <ul className="lists">
        <li>All Todos</li>
        <li>Active Todos</li>
        <li onClick={handleDoneTodos}>Done todos</li>
        <li>Important todos</li>
      </ul>
    );
  }

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
  }

  return (
    <>
      <div className="nav">
        <Lists />
      </div>
      <div className="body">
        <div>{listItems}</div>
        <button onClick={handleAddTodo} className="add-todo">
          ADD TODO
        </button>
      </div>
    </>
  );
}

export default Todos;
