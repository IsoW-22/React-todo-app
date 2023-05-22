import { useState } from "react"

function addTodo() {
    const [todoList, SetTodoList] = useState([]);
}

function AddButton(){
    return(
        <button className="add-todo" onClick={addTodo}>

        </button>
    )
}

function Todos() {
    return(
        <div className="body">
            <AddButton />
        </div>
    )
}

export default Todos