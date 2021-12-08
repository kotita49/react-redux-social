const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
       
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy = { ...state, newMessageBody: action.body };
          
            return stateCopy;
        
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            stateCopy = {
                ...state,
                messagesData: [...state.messagesData, { id: 6, message: body }],
                newMessageBody : ''
            }
               
            return stateCopy;
        
        default:
            return state;
            }

}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });


export default dialogsReducer;