import React from "react";
import d from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import * as path from "path";
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messeges/Messages";
import {addMessageAction} from "../Redux/dialogs-reducer";

// let NewMessageElement = React.createRef();

// let addMessage = () => {
//     let text = NewMessageElement.current.valueOf();
//     alert(text);
// }

const Dialogs = (props) => {

    let NewMessageElement = React.createRef();

    let addMessage = () => {
        let text = NewMessageElement.current.value;
        props.dispatch(addMessageAction(text));
        NewMessageElement.current.value = '';
    }

    let dialogsElements =  props.state.DialogsData.map((d) => {
        return <div><DialogsItem name={d.name} id={d.id} img={d.img}/></div>;
    })

    let messagesElements = props.state.MessagesData.map((m) => {
        return <Messages message={m.message}/>;
    })

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea placeholder='Enter your messages' ref={NewMessageElement} cols="20" rows="10"></textarea>
                    </div>
                    <button onClick={ addMessage }>Add new message</button>
                </div>
            </div>
        </div>
        // <div>
        //     <DialogsItem/>
        //     <Messages/>
        // </div>
    );
}

export default Dialogs;