import {INITIALIZE} from "../types";

const initialState = {
    initialize: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE:
            return {
                ...state, initialize: true
            }
        default:
            return state
    }
}
export default appReducer