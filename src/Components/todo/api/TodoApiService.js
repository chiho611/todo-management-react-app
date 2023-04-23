import {apiClient} from "./ApiClient";

export const retrieveTodoByUsernameApi = (username) => apiClient.get(`/user/${username}/todos`)

export const deleteTodoApi = (id) => apiClient.delete(`/todo/${id}`)

export const retrieveTodoByIdApi = (id) => apiClient.get(`/todo/${id}`)

export const createTodoApi = (username, todo) => apiClient.post(`/user/${username}/todo/`, todo)

export const updateTodoApi = (id, todo) => apiClient.put(`/todo/${id}`, todo)

