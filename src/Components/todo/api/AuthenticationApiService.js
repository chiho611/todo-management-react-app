import {apiClient} from "./ApiClient";

export const basicAuthentication = (token) => apiClient.get(`basic-auth`, {
    headers: {Authorization: token}
})

export const jwtAuthentication = (username,password) => apiClient.post(`authenticate`, {username,password})