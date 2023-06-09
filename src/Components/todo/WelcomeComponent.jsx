import {Link, useParams} from "react-router-dom";
import React, {useState} from "react";
import {retrieveHelloWorldPathVariable} from "./api/HelloWorldApiService";
import {useAuth} from "../secruity/AuthContext";

export default function WelcomeComponent() {
    const {username} = useParams();
    const [message, setMessage] = useState(null);
    const {token} = useAuth();

    function callHelloWorldRestApi() {
        retrieveHelloWorldPathVariable("Ranga", token)
            .then((response) => successResponse(response))
            .catch((error) => errorResponse(error))
        // .finally(() => console.log("clean up"))
    }

    function successResponse(response) {
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>Manage your todos - <Link to={"/todos"}>Go here</Link></div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>Call Hello World!</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}
