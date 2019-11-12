import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";


const Message = (props) => {
   return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs = [
        { id: 1,name: 'Ruslan'},
        { id: 2, name: 'Alina'},
        { id: 3, name: 'Nastya'},
        { id: 4, name: 'Maxim'},
        { id: 5, name: 'Sasha'},
        { id: 6, name: 'Maya'}
    ]
    let massages = [
        { id: 1, message: 'Hi'},
        { id: 2, message: 'How are you?'},
        { id: 3, message: 'Yo'}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = massages.map( m => <Message message={m.message}/> );



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                { dialogsElements }

            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>

    )
}

export default Dialogs;