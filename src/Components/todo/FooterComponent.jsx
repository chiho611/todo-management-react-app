import React, {useContext} from "react";
import {AuthContext} from "../secruity/AuthContext";

function FooterComponent() {

    const authContext = useContext(AuthContext);

    console.log("footer" , authContext)
    return (
        <footer className="footer">
            <div className="container">
                Your Footer
            </div>
        </footer>

    )
}

export default FooterComponent