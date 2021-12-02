import dialogsReducer from "./dialogs-reducer";
import friendsPageReducer from "./friendsPage-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [{ id: 1, message: "Hi! How are you?", like: 7, image: 'https://64.media.tumblr.com/tumblr_lvcahmDV7J1r4dawdo1_640.jpg' },
            { id: 2, message: "It's my first post!", like: 55, image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80' },
            { id: 2, message: 'Having a good day!', like: 6, image: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80' }
            ],
            newPostText: 'it-kam'

        },
        dialogPage: {
            dialogsData: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Sasha' },
                { id: 3, name: 'Tania' },
                { id: 4, name: 'Sveta' },
                { id: 5, name: 'Vania' }
            ],
            messagesData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Whats up' }
            ],
            newMessageBody: '',
        },
        friendPage: {
            friendsData: [
                { id: 1, name: 'Dima', lastname: 'Kovalsky' },
                { id: 2, name: 'Sasha', lastname: 'Voronova' },
                { id: 3, name: 'Tania', lastname: 'Kot' },
                { id: 4, name: 'Sveta', lastname: 'Vasilevskaya' },
                { id: 5, name: 'Vania', lastname: 'Petrovich' }
            ]
        }
    },
    _rerenderEntireTree() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;// pattern observer, publisher-subscriber
    },

    dispatch(action) {  // type: 'ADD-POST'
        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.friendPage = friendsPageReducer(this._state.friendPage, action);
        this._rerenderEntireTree(this._state);
    }
}


        
export default store;