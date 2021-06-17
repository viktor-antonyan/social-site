const initialState = {
    friends: [
        {
            img: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
            name: 'User 1'
        },
    ]
}
export const friendsReducer = (state = initialState, action) =>{
    switch(action.type){
        default: return state
    }
}