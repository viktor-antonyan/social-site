import {createSelector} from 'reselect'

export const getUsersSelector = (state) => {
    return state.usersData.users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(i => true)
})
export const getPageSize = (state) => {
    return state.usersData.pageSize
}
export const getAllUsersCount = (state) => {
    return state.usersData.allUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersData.currentPage
}
export const getIsFetching = (state) => {
    return state.usersData.isFetching
}
export const getIsDisabled = (state) => {
    return state.usersData.isDisabled
}