import classes from "./Modal.module.css";
import ReactDOM from 'react-dom';

const Backdrop = ({onHideModal}) => {
  return <div className={classes.backdrop} onClick={onHideModal}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({children, onHideModal}) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onHideModal={onHideModal} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
