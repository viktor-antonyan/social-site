import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {dialogReducer} from "./reducers/dialogReducer";
import {profileReducer} from "./reducers/profileReducer";
import {friendsReducer} from "./reducers/friendsReducer";
import {usersReducer} from "./reducers/usersReducer";
import {authReducer} from "./reducers/authReducer";
import ReduxThunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from "./reducers/appReducer";

const reducers = combineReducers({
    profileData: profileReducer,
    dialogData: dialogReducer,
    friendData: friendsReducer,
    usersData: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk)))

window.store = store