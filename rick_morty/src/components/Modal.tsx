import React, {FunctionComponent} from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  title: string;
  content: string;
  actions: string;
  onDismiss(): void;
}

// Para que el modal sea visible, en public/index.html, hay que añadir, después de div#root, otro div#modal
// Este modal se usa en el componente StreamDelete!!
const Modal: FunctionComponent<ModalProps> = (props: ModalProps): JSX.Element => {
  // al createPortal se le pasan dos argumentos, el jsx, y el div donde se debe renderizar
  const modal = document.getElementById("modal") as HTMLModElement;
  return ReactDOM.createPortal(
    //   si pulso en cualquier sitio dentro de este div, gracias a la propagación, se cambia de página!!
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      {/* Para que esto no ocurra, onClick={e => e.stopPropagation()} !!! */}
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    modal
  );
};
export default Modal;