import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../secruity/AuthContext";

export default function LoginComponent() {
    const [username, setUsername] = useState("in28minutes")
    const [password, setPassword] = useState("")
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate();
    const authContext = useAuth();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = () => {
        if (authContext.login(username, password)) {
            navigate(`/welcome/${username}`)
        } else {
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="login">
            <h1>Time to Login!</h1>
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