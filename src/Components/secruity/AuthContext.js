import {createContext, useContext, useState} from "react";
import {jwtAuthentication} from "../todo/api/AuthenticationApiService";
import {apiClient} from "../todo/api/ApiClient";

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}) {
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)
    const [token, setToken] = useState(null)

    async function login(username, password) {
        // const baToken = `Basic ${window.btoa(username + ":" + password)}`
        const response = await jwtAuthentication(username, password)

        const jwtToken = `Bearer ${response.data.token}`;
        // console.log(response.data.token)
        try {
            if (response.status === 200) {
                setAuthenticated(true)
                setUsername(username)
                setToken(jwtToken)

                apiClient.interceptors.request.use((config) => {
                    console.log("interceptors and adding a token", jwtToken)
                    config.headers.Authorization = jwtToken;
                    return config;
                });
                return true;
            } else {
                logout()
                return false;
            }
        } catch (error) {
            logout()
            return false;
        }

    }


    function logout() {
        setAuthenticated(false)
        setUsername(null)
        setToken(null)
    }

    const valuesToShare = {
        isAuthenticated, setAuthenticated, login, logout, username, token
    };
    return (
        <AuthContext.Provider value={valuesToShare}>
            {children}
        </AuthContext.Provider>
    )
}
