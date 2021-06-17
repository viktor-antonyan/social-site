import {
    CHANGE_CURRENT_PAGE,
    GET_ALL_USERS_COUNT,
    SET_USER,
    TOGGLE_FOLLOW,
    IS_FETCHING,
    TOGGLE_DISABLED
} from "../types";

const initialState = {
    users: [],
    pageSize: 6,
    allUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isDisabled: [],
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u
                })
            }
        case SET_USER:
            return {...state, users: [...state.users, ...action.users]}
        case CHANGE_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case GET_ALL_USERS_COUNT:
            return {...state, allUsersCount: action.usersCount}
        case IS_FETCHING:
            return {...state, isFetching: !state.isFetching}
        case TOGGLE_DISABLED:
            return {
                ...state, isDisabled: action.isFetching ?
                    [...state.isDisabled, action.userId] :
                    state.isDisabled.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}
