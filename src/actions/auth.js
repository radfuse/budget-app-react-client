import AuthService from "../services/auth.service";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from "./type";

export const register = (email, password, password_again) => (dispatch) => {
    return AuthService.register(email, password, password_again).then(
        () => {
            dispatch({
                type: REGISTER_SUCCESS
            });
            
            return new Promise((resolve, reject) => {
                dispatch(login(email, password))
                    .then(() => resolve())
                    .catch(() => reject())
            })
        },
        (error) => {
            dispatch({
                type: REGISTER_FAIL,
                payload: error?.response?.data
            });

            return Promise.reject();
        }
    );
};
  
export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data.token,
            });

            return Promise.resolve();
        },
        (error) => {
            dispatch({
                type: LOGIN_FAIL,
                payload: error?.response?.data
            });

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};
  