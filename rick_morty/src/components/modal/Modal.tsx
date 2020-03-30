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

 Para que el modal sea visible, en public/index.html, hay que añadir, después de div#root, otro div#modal!! 
*/

const Modal: FunctionComponent<ModalProps> = (
    props: ModalProps
): JSX.Element => {
    // al createPortal se le pasan dos argumentos, el jsx, y el div donde se debe renderizar
    const modal = document.getElementById("modal") as HTMLModElement;
    return ReactDOM.createPortal(
        //   si pulso en cualquier sitio dentro de este div, gracias a la propagación, se cambia de página!!
        <div
            onClick={() => props.onDismiss()}
            className="ui dimmer modals visible active"
        >
            {/* Para que esto no ocurra, onClick={e => e.stopPropagation()} !!! */}
            <div
                onClick={e => e.stopPropagation()}
                className="ui standard modal visible active"
            >
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.action}</div>
            </div>
        </div>,
        modal
    );
};
export default Modal;
