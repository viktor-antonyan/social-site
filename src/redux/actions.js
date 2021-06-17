import {
    ADD_MESSAGE,
    ADD_POST, DELETE_POST,
    CHANGE_CURRENT_PAGE,
    GET_ALL_USERS_COUNT, SET_STATUS, IS_FETCHING, SET_AUTH_USER_DATA,
    SET_USER, SET_USER_PROFILE, TOGGLE_DISABLED,
    TOGGLE_FOLLOW, INITIALIZE, CHANGE_PROFILE_PHOTO, SET_CAPTCHA
} from "./types";

export const addPost = (newPost) => {
    return {
        type: ADD_POST,
        newPost
    }
}
export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}
export const addMessage = (newMessage) => {
    return {
        type: ADD_MESSAGE,
        newMessage
    }
}
export const toggleSubscribe = (userId) => {
    return {
        type: TOGGLE_FOLLOW,
        userId
    }
}
export const setUser = (users) => {
    return {
        type: SET_USER,
        users
    }
}
export const changeCurrentPage = (page) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        page
    }
}
export const getAllUsersCount = (usersCount) => {
    return {
        type: GET_ALL_USERS_COUNT,
        usersCount
    }
}
export const changeIsFetching = () => {
    return {
        type: IS_FETCHING
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export const setUserAuthData = (id, login, email, isAuth) => {
    return {
        type: SET_AUTH_USER_DATA,
        data: {id, login, email, isAuth}
    }
}
export const toggleDisabled = (userId, isFetching) => {
    return {
        type: TOGGLE_DISABLED,
        userId,
        isFetching
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}
export const initialize = () => {
    return {
        type: INITIALIZE
    }
}
export const changeProfilePhoto = (photo) => {
    return {
        type: CHANGE_PROFILE_PHOTO,
        photo
    }
}
export const setCaptcha = (captchaUrl) => {
    return {
        type: SET_CAPTCHA,
        captchaUrl
    }
}