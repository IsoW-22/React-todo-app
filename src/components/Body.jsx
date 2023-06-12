import { useState } from "react";

function Todos() {
  const localExist = JSON.parse(localStorage.getItem("todos"));
  const [todoList, SetTodoList] = useState(localExist ? localExist : []);
  const [List, SetList] = useState("all");

  function handleChangeList(listName) {
    SetList(listName);
  }

  function handleDeleteTodo(index) {
    SetTodoList(todoList.filter((item) => item.id !== index));
    localStorage.setItem("todos", JSON.stringify(
      todoList.filter((item) => item.id !== index)
    ));
  }

  function handleChangeText(index, value) {
    SetTodoList(
      todoList.map((todo) => {
        if (todo.id === index) {
          return { ...todo, text: value };
        } else {
          return todo;
        }
      })
    );
    localStorage.setItem("todos", JSON.stringify(
      todoList.map((todo) => {
        if (todo.id === index) {
          return { ...todo, text: value };
        } else {
          return todo;
        }
      })
    ))
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
    localStorage.setItem("todos", JSON.stringify(
      todoList.map((todo) => {
        if (todo.id === index) {
          return { ...todo, isDone: isDone, isImportant: false };
        } else {
          return todo;
        }
      })
    ));
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
    localStorage.setItem("todos", JSON.stringify(
      todoList.map((todo) => {
        if (todo.id === index) {
          return { ...todo, isImportant: isImportant };
        } else {
          return todo;
        }
      })
    ))
  }

  function handleAddTodo() {
    SetTodoList([
      ...todoList,
      { id: crypto.randomUUID(), text: "", isDone: false, isImportant: false },
    ]);
    localStorage.setItem("todos", JSON.stringify(
      [
        ...todoList,
        { id: crypto.randomUUID(), text: "", isDone: false, isImportant: false },
      ]
    ));
  }

  return (
    <>
      <div id="nav">
        <Lists onClick={handleChangeList} List={List} />
      </div>
      <div id="body">
      <button onClick={handleAddTodo} className="ml-[20%] rounded-lg border-2 transition-all bg-stlblue text-white hover:bg-white hover:text-stlblue hover:border-2 hover:border-stlblue">
          ADD TODO
        </button>
        <div className="flex flex-wrap">
          <TodoItems
            onDelete={handleDeleteTodo}
            onMarkDone={handleMarkDone}
            onMarkImportant={handleImportantTodo}
            onChangeText={handleChangeText}
            todoList={todoList}
            List={List}
          />
        </div>
      </div>
    </>
  );
}

function Lists({ List, onClick }) {
  return (
    <ul className="w-auto h-60 flex flex-col text-center text-xl font-mono antialiased ml-2 mt-20">
      <li
        onClick={() => onClick("all")}
        className={List === "all" ? "card selected" : "card"}
      >
        All Todos
      </li>
      <li
        onClick={() => onClick("active")}
        className={List === "active" ? "card selected" : "card"}
      >
        Active Todos
      </li>
      <li
        onClick={() => onClick("done")}
        className={List === "done" ? "card selected" : "card"}
      >
        Done todos
      </li>
      <li
        onClick={() => onClick("important")}
        className={List === "important" ? "card selected" : "card"}
      >
        Important todos
      </li>
    </ul>
  );
}

function TodoItems({
  onDelete,
  onMarkDone,
  onMarkImportant,
  onChangeText,
  todoList,
  List,
}) {
  let todoItems;

  function makeMap(givenList) {
    if (givenList) {
      const newList = givenList.map((todo) => (
        <div
          className={
            (todo.isDone ? "done " : todo.isImportant ? "important " : "") +
            "todo"
          }
          key={todo.id}
        >
          <input
            type="checkbox"
            onChange={(e) => onMarkDone(todo.id, e.target.checked)}
            checked={todo.isDone}
            className="checkbox"
          />
          <input
            type="text"
            value={todo.text}
            onChange={(e) => onChangeText(todo.id, e.target.value)}
            disabled={todo.isDone ? true : false}
            autoFocus
            className="input"
          />
          <button onClick={() => onDelete(todo.id)} className="delete">&times;</button>
          <input
            type="checkbox"
            onChange={(e) => onMarkImportant(todo.id, e.target.checked)}
            checked={todo.isImportant}
            disabled={todo.isDone ? true : false}
            className="checkbox-imp"
          />
        </div>
      ));
      return newList;
    }
  }

  switch (List) {
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
      const newTodoList = todoList.filter((item) => item.isImportant === true);
      todoItems = makeMap(newTodoList);
      break;
    }
    default:
      todoItems = makeMap(todoList);
  }

  return todoItems;
}

export default Todos;
