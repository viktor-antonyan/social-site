import {ADD_MESSAGE} from "../types";

const initialState = {
    userData: [
        {id: 1, name: 'viktor'},
        {id: 2, name: 'garnik'},
        {id: 3, name: 'grigor'},
    ],
    usersMessages: [
        {id: 1, text: 'hello'},
        {id: 2, text: 'you are you'},
        {id: 3, text: 'you to work'},
    ],
}
export const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 4,
                text: action.newMessage
            }
            return {...state, usersMessages: [...state.usersMessages, newMessage]}

        default:
            return state
    }
}