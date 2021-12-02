const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

let initialState = {
        posts: [{ id: 1, message: "Hi! How are you?", like: 7, image: 'https://64.media.tumblr.com/tumblr_lvcahmDV7J1r4dawdo1_640.jpg' },
    { id: 2, message: "It's my first post!", like: 55, image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80' },
    { id: 2, message: 'Having a good day!', like: 6, image: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80' }
    ],
    newPostText: 'it-kam'
    }

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
             case UPDATE_POST:
            state.newPostText = action.newText;
              return state;
        default:
            return state;

    }
                 
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostActionCreator = (text) => ({ type: UPDATE_POST, newText: text });

export default profileReducer;

