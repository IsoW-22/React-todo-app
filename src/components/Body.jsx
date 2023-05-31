import { useState } from "react";

function Todos() {
  const [todoList, SetTodoList] = useState([]);
  const [listState, SetListState] = useState("all");

  function handleDeleteTodo(index) {
    SetTodoList(todoList.filter((item) => item.id !== index));
  }

  function handleMarkDone(index, isDone) {
    SetTodoList(
      todoList.map((todo) => {
        if (todo.id === index) {
          return { ...todo, isDone: isDone, isImportant: false };
        } else {
          return todo;
        }
      })
    );
  }

  function handleImportantTodo(index, isImportant) {
    SetTodoList(
      todoList.map((todo) => {
        if (todo.id === index) {
          return { ...todo, isImportant: isImportant };
        } else {
          return todo;
        }
      })
    );
  }

  function TodoList() {
    let todoItems;
    function makeMap(givenList) {
      const newList = givenList.map((todo) => (
        <div className={todo.isDone ? "todo done" : todo.isImportant ? "important" : "todo"} key={todo.id}>
          <input
            type="checkbox"
            onChange={(e) => handleMarkDone(todo.id, e.target.checked)}
            checked={todo.isDone}
          />
          <input type="text" />
          <button onClick={() => handleDeleteTodo(todo.id)}>del</button>
          <input
            type="checkbox"
            onChange={(e) => handleImportantTodo(todo.id, e.target.checked)}
            checked={todo.isImportant}
            disabled={todo.isDone ? true : false}
          />
        </div>
      ));
      return newList;
    }
    switch (listState) {
      case "done": {
        const newTodoList = todoList.filter((item) => item.isDone === true);
        todoItems = makeMap(newTodoList);
        break;
      }
      case "active": {
        const newTodoList = todoList.filter((item) => item.isDone === false);
        todoItems = makeMap(newTodoList);
        break;
      }
      case "important": {
        const newTodoList = todoList.filter(
          (item) => item.isImportant === true
        );
        todoItems = makeMap(newTodoList);
        break;
      }
      default:
        todoItems = makeMap(todoList);
    }
    return todoItems;
  }

  function Lists() {
    return (
      <ul className="lists">
        <li onClick={() => SetListState("all")}>All Todos</li>
        <li onClick={() => SetListState("active")}>Active Todos</li>
        <li onClick={() => SetListState("done")}>Done todos</li>
        <li onClick={() => SetListState("important")}>Important todos</li>
      </ul>
    );
  }

  function handleAddTodo() {
    SetTodoList([
      ...todoList,
      { id: crypto.randomUUID(), isDone: false, isImportant: false },
    ]);
  }

  return (
    <>
      <div className="nav">
        <Lists />
      </div>
      <div className="body">
        <TodoList />
        <button onClick={handleAddTodo} className="add-todo">
          ADD TODO
        </button>
      </div>
    </>
  );
}

export default Todos;
