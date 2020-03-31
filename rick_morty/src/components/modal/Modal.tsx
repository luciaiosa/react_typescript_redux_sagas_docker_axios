import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
    title: string;
    content: string;
    action: string;
    onDismiss(): void;
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
    // I'm passing two arguments to createPortal, the jsx, and the div where it has to render
    const modal = document.getElementById("modal") as HTMLModElement;
    return ReactDOM.createPortal(
        //   If I click anywhere inside this div, thanks to the propagation, it changes the page !!
        <div
            // onClick={() => props.onDismiss()}
            className="ui dimmer modals visible active"
        >
            {/* I don want that, so: onClick={e => e.stopPropagation()} !!! */}
            <div
                onClick={e => e.stopPropagation()}
                className="ui standard modal visible active"
            >
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions" onClick={() => props.onDismiss()}>
                    {props.action}
                </div>
            </div>
        </div>,
        modal
    );
};
export default Modal;
