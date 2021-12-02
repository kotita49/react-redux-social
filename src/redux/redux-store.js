import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogs-reducer';
import friendsPageReducer from './friendsPage-reducer';
import profileReducer from './profile-reducer';



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    friendPage: friendsPageReducer
});
let store = createStore(reducers);

export default store;