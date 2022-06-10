import axios from "axios"
import { setAuthToken, removeAuthToken } from "../services/jwt.service"

const login = (email, password) => {
    return axios.post("/login", { email, password })
        .then((response) => {
            if (response.data.token) {
                setAuthToken(response.data.token)
            }
            
            return response.data;
        })
}

const register = (email, password, password_again) => {
    return axios.post("/register", {
        email,
        password,
        password_again
    })
}

const logout = () => {
    removeAuthToken()
}

const functions = {
    register,
    login,
    logout,
}

export default functions
