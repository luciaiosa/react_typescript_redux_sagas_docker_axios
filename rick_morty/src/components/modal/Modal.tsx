import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { Close } from "@material-ui/icons";
import { modalStyles } from "./ModalStyle";
import {InfoButton, DangerButton} from "../../components-ui/Button";

interface ModalProps {
    title: string;
    content: string;
    action: string;
    onRemove(): void;
    onCancel(): void;
}
/*
 Portal is the recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
 ReactDOM.createPortal(child, container):
 The first argument (child) is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element.

 To make modal visible, in public/index.html, I have to add, after div#root, another div#modal!! 
*/

const Modal: FunctionComponent<ModalProps> = (
    props: ModalProps
): JSX.Element => {
    const classes = modalStyles();
    // I'm passing two arguments to createPortal, the jsx, and the div where it has to render
    const modal = document.getElementById("modal") as HTMLModElement;
    return ReactDOM.createPortal(
        //   If I click anywhere inside this div, thanks to the propagation, it changes the page !!
        <div
            // onClick={() => props.onDismiss()}
            className={classes.modalContainer}
        >
            {/* I don want that, so: onClick={e => e.stopPropagation()} !!! */}
            <div
                onClick={e => e.stopPropagation()}
                className={classes.modal}
            >
                <div className={classes.header}>
                    <div className={classes.title}>{props.title}</div>
                    <div
                        onClick={() => props.onCancel()}
                        >
                        <Close name="close" />
                            
                    </div>
                </div>
                <div className={classes.content}>{props.content}</div>
                <div className={classes.actions}>
                    <InfoButton onClick={() => props.onCancel()}>Cancel</InfoButton>
                    <DangerButton onClick={() => props.onRemove()}>{props.action}</DangerButton>
                </div>
            </div>
        </div>,
        modal
    );
};
export default Modal;
