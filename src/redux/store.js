import {profileReducer} from "./reducers/profileReducer";
import {dialogReducer} from "./reducers/dialogReducer";

export const store = {
    _state: {
        dialogData: {
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
            currentMessage: ''
        },
        profileData: {
            posts: [
                {
                    id: 1,
                    post: 'post 1',
                    img: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg'
                },
                {
                    id: 2,
                    post: 'post 2',
                    img: 'https://pbs.twimg.com/media/C7ie45-XwAQaCUq.jpg'
                },
            ],
            currentText: ''
        },
        friendData: {
            friend: [
                {
                    img: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
                    name: 'User 1'
                },
            ]
        }
    },
    _renderState() {
    },
    dispatch(action) {
        profileReducer(this._state.profileData, action)
        dialogReducer(this._state.dialogData, action)

        this._renderState(this._state)
    },
    subscribe(dispatcher) {
        this._renderState = dispatcher
    },
    getState() {
        return this._state
    }
}
window['store'] = store
