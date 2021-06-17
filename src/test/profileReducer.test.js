import {addPost, deletePost} from "../redux/actions";
import {profileReducer} from "../redux/reducers/profileReducer";

const state = {
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
        ]
    }

test('state length should be incremented', () => {
    const action = addPost('new post')
    const newState = profileReducer(state,action)
    expect(newState.posts.length).toBe(3)
});

it('if state post deleted posts length should be decremented',()=>{
    const action = deletePost(1)
    const newState = profileReducer(state,action)
    expect(newState.posts.length).toBe(1)
})