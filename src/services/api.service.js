import axios from 'axios'
import { getAuthToken } from './jwt.service'

export function initApiUrl(baseURL) {
    axios.defaults.baseURL = baseURL
}

export function setApiHeader() {
    axios.defaults.headers.common["Authorization"] = `Bearer ${getAuthToken()}`
}

export function removeApiHeader() {
    delete axios.defaults.headers.common['Authorization']
}