import {SET_AUTH_USER_DATA, SET_CAPTCHA} from "../types";

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captcha: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {...state, ...action.data}
        case SET_CAPTCHA:
            return {...state, captcha: action.captchaUrl}
        default:
            return state
    }
}
