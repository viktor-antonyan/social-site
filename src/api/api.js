import * as axios from "axios";

const instanceAxios = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "cfc63aaf-8085-43f4-b7e0-fca8962da9e4"
    }
})

export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instanceAxios.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(id) {
        return instanceAxios.post(`follow/${id}`, {}).then(response => response.data)
    },
    unFollow(id) {
        return instanceAxios.delete(`follow/${id}`).then(response => response.data)
    },
}

export const profileApi = {
    getProfileData(userId) {
        return instanceAxios.get(`profile/${userId}`)
    },
    getProfileStatus(userId) {
        return instanceAxios.get(`profile/status/${userId}`)
    },
    setProfileStatus(status) {
        return instanceAxios.put(`profile/status`, {status})
    },
    profilePhoto(photo) {
        const formData = new FormData()
        formData.append("image", photo)
        return instanceAxios.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveMyProfileData(profileData) {
        return instanceAxios.put('profile', profileData)
    }
}

export const authApi = {
    authMe() {
        return instanceAxios.get(`auth/me`)
    },
    authLogin(email, password, rememberMe, captcha = null) {
        return instanceAxios.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instanceAxios.delete(`auth/login`)
    }
}
export const securityApi = {
    setCaptchaUrl() {
        return instanceAxios.get(`security/get-captcha-url`)
    }
}