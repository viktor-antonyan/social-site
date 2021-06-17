import {ADD_POST, CHANGE_PROFILE_PHOTO, DELETE_POST, SET_STATUS, SET_USER_PROFILE} from "../types";

const initialState = {
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
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                post: action.newPost,
                img: 'https://pbs.twimg.com/media/C7ie45-XwAQaCUq.jpg'
            }
            return {...state, posts: [...state.posts, newPost]}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.postId)}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case CHANGE_PROFILE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photo}}
        default:
            return state
    }
}
