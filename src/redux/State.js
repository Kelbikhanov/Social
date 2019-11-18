import {rerenderEntireTree} from "../render";


let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you', likesCount:12},
            { id: 2, message: 'Its my post', likesCount:15},

        ]
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
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}



export default state;