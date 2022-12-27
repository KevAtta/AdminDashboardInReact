import classes from "./Modal3.module.css";
import ReactDOM from "react-dom";

const Modal3 = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.backdrop}>
          <div className={classes.modal}>
            <div>{props.children}</div>
          </div>
        </div>,
        document.getElementById("overlay2")
      )}
    </>
  );
};

export default Modal3;
