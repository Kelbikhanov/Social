const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi'},
        { id: 2, message: 'How are you?'},
        { id: 3, message: 'Yo'}
    ],

    dialogs: [
        { id: 1,name: 'Ruslan'},
        { id: 2, name: 'Alina'},
        { id: 3, name: 'Nastya'},
        { id: 4, name: 'Maxim'},
        { id: 5, name: 'Sasha'},
        { id: 6, name: 'Maya'}
    ],
    newMessageBody: ""
};



 const dialogsReducer = (state = initialState, action) => {
     switch (action.type) {
         case UPDATE_NEW_MESSAGE_BODY:
             return {
                 ...state,
                 newMessageBody: action.body
             };
         case SEND_MESSAGE:
             let body = state.newMessageBody;
             return {
                 ...state,
                 newMessageBody: '',
                 messages: [...state.messages, { id: 7, name: body}]
             };
         default:
             return state
     }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;