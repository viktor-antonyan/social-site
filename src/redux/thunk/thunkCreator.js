import {authApi, profileApi, securityApi, usersApi} from "../../api/api";
import {stopSubmit} from "redux-form"
import {
    changeCurrentPage,
    changeIsFetching, changeProfilePhoto,
    getAllUsersCount, initialize, setCaptcha, setStatus,
    setUser, setUserAuthData, setUserProfile,
    toggleDisabled,
    toggleSubscribe
} from "../actions";

export const getAllUsers = (currentPage, pageSize) => async dispatch => {
    dispatch(changeIsFetching())
    dispatch(changeCurrentPage(currentPage))

    const data = await usersApi.getUsers(currentPage, pageSize)
    dispatch(changeIsFetching())
    dispatch(setUser(data.items))
    dispatch(getAllUsersCount(data.totalCount))
    // dispatch(getAllUsersCount(110))

}

export const follow = id => async dispatch => {
    dispatch(toggleDisabled(id, true))
    const data = await usersApi.follow(id)
    if (data.resultCode === 0) {
        dispatch(toggleSubscribe(id))
        dispatch(toggleDisabled(id, false))
    }
}

export const unfollow = id => async dispatch => {
    dispatch(toggleDisabled(id, true))
    const data = await usersApi.unFollow(id)
    if (data.resultCode === 0) {
        dispatch(toggleSubscribe(id))
        dispatch(toggleDisabled(id, false))
    }
}

export const profileData = (userId) => async dispatch => {
    const response = await profileApi.getProfileData(userId)
    dispatch(setUserProfile(response.data))
}

export const profileStatus = (userId) => async dispatch => {
    const response = await profileApi.getProfileStatus(userId)
    dispatch(setStatus(response.data))
}
export const setProfileStatus = (status) => async dispatch => {
    const response = await profileApi.setProfileStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const logout = () => async dispatch => {
    const response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserAuthData(null, null, null, false))
    }
}
export const auth = () => async dispatch => {
    const response = await authApi.authMe()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setUserAuthData(id, login, email, true))
    }
}
export const initializeApp = () => async dispatch => {
    const promise = dispatch(auth())
    await Promise.all([promise])
    dispatch(initialize())
}
export const changeMyProfilePhoto = (photo) => async dispatch => {
    const response = await profileApi.profilePhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(changeProfilePhoto(response.data.data.photos))
    }
}
export const saveProfile = (profileInfo) => async (dispatch, getState) => {
    const myId = getState().auth.id
    const response = await profileApi.saveMyProfileData(profileInfo)
    if (response.data.resultCode === 0) {
        dispatch(profileData(myId))
    } else {
        dispatch(stopSubmit("profileInfo", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}
export const authLogin = (email, password, rememberMe, captcha) => async dispatch => {
    const response = await authApi.authLogin(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(auth())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(setCaptchaSuccess())
        }
        dispatch(stopSubmit("login", {_error: response.data.messages}))
    }
}
export const setCaptchaSuccess = () => async dispatch => {
    const response = await securityApi.setCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(setCaptcha(captchaUrl))
}