import { Buffer } from 'buffer'

const TOKEN_KEY = 'access_token'

export function getAuthToken () {
    return localStorage.getItem(TOKEN_KEY)
}

export function setAuthToken (jwt) {
    localStorage.setItem(TOKEN_KEY, jwt)
}

export function removeAuthToken () {
    localStorage.removeItem(TOKEN_KEY)
}

export function isValidJwt (jwt) {
    if (!jwt || jwt.split('.').length < 3) {
        return false
    }
    
    const tokenParts = jwt.split('.')
    const data = JSON.parse(Buffer.from(tokenParts[1], 'base64'))
    const exp = new Date(data.exp * 1000) // JS deals with dates in milliseconds since epoch
    const now = new Date()
    return now < exp
}