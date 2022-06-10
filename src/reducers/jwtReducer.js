import { Buffer } from 'buffer'
import {
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from "../actions/type";

import { getAuthToken, isValidJwt } from "../services/jwt.service"

const token = getAuthToken()
const tokenData = getTokenData(token)

const initialState = {
    isAuthenticated: token ? isValidJwt(token) : false,
    tokenData: tokenData,
    authError: { error: null, fieldErrors: null }
}

function getTokenData(token) {
    if (token) {
        const tokenParts = token.split('.')
        return JSON.parse(Buffer.from(tokenParts[1], 'base64'))
    }

    return null;
}

function parseError(payload) {
    let error = null
    let fieldErrors = null

    if (payload.message) {
        error = error.message
    } else if (payload.length) {
        fieldErrors = {}

        payload.forEach(element => {
            fieldErrors[element.field] = element.message
        })
    }

    return { error, fieldErrors }
}
  
export default function auth(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                isAuthenticated: isValidJwt(payload),
                tokenData: getTokenData(payload),
                authError: { error: null, fieldErrors: null }
            }
        case LOGIN_FAIL:
            return {
                isAuthenticated: false,
                tokenData: null,
                authError: parseError(payload)
            }
        case REGISTER_FAIL:
            return {
                isAuthenticated: false,
                tokenData: null,
                authError: parseError(payload)
            }
        case LOGOUT:
            return {
                isAuthenticated: false,
                tokenData: null,
                authError: { error: null, fieldErrors: null }
            }
        default:
            return state
    }
}