import React from "react";

function ListTodosComponent() {

    const today = new Date();

    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

    const todos = [
        {id: 1, description: "Learn AWS", done: false, targetDate},
        {id: 2, description: "Learn Google", done: false, targetDate},
        {id: 3, description: "Learn Full Stack", done: false, targetDate},
    ]
    return (
        <div className="container">
            <h1>Things you want to do!</h1>
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>done ?</th>
                        <th>target date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {todos.map(todo => {
                        return (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toDateString()}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTodosComponent