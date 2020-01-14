import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let state = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you', likesCount:12},
                { id: 2, message: 'Its my post', likesCount:15},

            ],
            newPostText: ''

        },

        dialogsPage: {
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
            newMessageBody: "fg"
        },

        sidebar: {}
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },
    _callSubscriber() {
        console.log('state change');
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}






export default state;
window.store = state;