import React, {useState} from "react";
import {BrowserRouter, Link, Route, Routes, useNavigate, useParams} from "react-router-dom";

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <HeaderComponent/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent/>}/>
                    <Route path="/" element={<LoginComponent/>}/>
                    <Route path="/welcome/:username" element={<WelcomeComponent/>}/>
                    <Route path="/todos" element={<ListTodosComponent/>}/>
                    <Route path="/logout" element={<LogoutComponent/>}/>

                    <Route path="*" element={<ErrorComponent/>}/>
                </Routes>
            </BrowserRouter>
            <FooterComponent/>
        </div>
    )
}

function LoginComponent() {
    const [username, setUsername] = useState("in28minutes")
    const [password, setPassword] = useState("")
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = () => {
        if (username === "in28minutes" && password === "dummy") {
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else {
            setShowErrorMessage(true)
            setShowSuccessMessage(false)
        }
    }

    return (
        <div className="login">
            {showSuccessMessage && <div className="successMessage">
                Authenticated Success
            </div>}
            {showErrorMessage && <div className="errorMessage">
                Authenticated Failed. Please check your credentials.
            </div>}
            <div>
                <label>User Name</label>
                <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name={password} onChange={handlePasswordChange}/>
            </div>
            <div>
                <button type="button" name="login" onClick={handleSubmit}>login</button>
            </div>
        </div>
    )

}

function WelcomeComponent() {
    const {username} = useParams();
    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>Manage your todos - <Link to={"/todos"}>Go here</Link></div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>
                Apologies for the 404. Reach out to our team at 001-777-8888
            </div>
        </div>
    )
}

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

function HeaderComponent() {
    return (
        <div className="header">
                Header <hr/>
        </div>
    )
}

function FooterComponent() {
    return (
        <div className="header">
            <hr/> Footer
        </div>
    )
}

function LogoutComponent() {
    return (
        <div className="logout">
            <h1>You are Logged out!</h1>
            <div>Thank you for using our app !</div>
        </div>
    )
}