import React, {useEffect, useState} from "react";
import {deleteTodoApi, retrieveTodoByUsernameApi} from "./api/TodoApiService";
import {useAuth} from "../secruity/AuthContext";
import {useNavigate} from "react-router-dom";

function ListTodosComponent() {

    const [todos, setTodos] = useState([])
    const [message , setMessage] = useState('')

    const {username} = useAuth();

    // const username = authContext.username;

    const navigate = useNavigate();
    useEffect(() => {
            refreshTodos()
        },
        []
    )

    function refreshTodos() {
        retrieveTodoByUsernameApi(username)
            .then(response => {
                // console.log(response)
                setTodos(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    function deleteTodo(id) {
        deleteTodoApi(id)
            .then(() => {
                setMessage(`Delete todo with id = ${id} successful`)
                refreshTodos()
            })
            .catch(error => console.log(error))
    }

    function updateTodo(id) {
        navigate(`/todo/${id}`)
    }

    return (
        <div className="container">
            <h1>Things you want to do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Done ?</th>
                        <th>Target Date</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                    </thead>
                    <tbody>
                    {todos.map(todo => {
                        return (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate}</td>
                                <td>
                                    <button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-success" onClick={() => updateTodo(todo.id)}>
                                        Update
                                    </button>
                                </td>
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