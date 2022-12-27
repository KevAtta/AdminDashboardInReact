import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.backdrop}>
          <div className={classes.modal}>
            <div>{props.children}</div>
          </div>
        </div>,
        document.getElementById("overlay1")
      )}
    </>
  );
};

export default Modal;
