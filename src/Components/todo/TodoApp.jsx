import React, {useState} from "react";

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <LoginComponent/>
            {/*<WelcomeComponent/>*/}
        </div>
    )
}

function LoginComponent() {
    const [username, setUsername] = useState("in28minutes")
    const [password, setPassword] = useState("")
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

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


// function WelcomeComponent() {
//     return (
//         <div className="Welcome">
//             Welcome Component
//         </div>
//     )
// }