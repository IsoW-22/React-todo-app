function Lists() {
    return(
        <ul>
            <li>All Todos</li>
            <li>Active Todos</li>
            <li>Done todos</li>
            <li>Important todos</li>
        </ul>
    )
}

function Nav() {
    return(
        <div className="nav">
            <Lists />
        </div>
    )
}

export default Nav