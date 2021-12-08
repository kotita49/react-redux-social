import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogs-reducer';
import friendsPageReducer from './friendsPage-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    friendPage: friendsPageReducer,
    usersPage: usersReducer
});
let store = createStore(reducers);

export default store;