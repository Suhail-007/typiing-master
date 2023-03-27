import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../../store/modalSlice';

import styles from './popUpModal.module.scss';

function PopUpMarkup({ message, title }) {
  return (
    <div className={styles.popUpContainer}>
      <div className={styles.titleCont}>
        <h2> {title} </h2>
     
      </div>
      
      <div className={styles.messageCont}>
        <p>{message}</p>
      </div>
      
      
      <div className={styles.btnCont}>
        <button data-close='close'>Close</button>
      </div>
    </div>
  )
}


export function Backdrop({ children }) {
  const dispatch = useDispatch();

  const closeHandler = function(e) {
    if (e.target.dataset.close === 'close') dispatch(modalActions.toggleModal());
  }

  return (
    <>
      <div onClick={closeHandler} data-close='close' className={styles.backdrop}>
        {children}
      </div>
    </>
  )
}


export default function PopUpModal({ message, title }) {

  const overlay = document.querySelector('#overlay');

  return (
    <>
      {
        ReactDOM.createPortal(
          <Backdrop>
            <PopUpMarkup message={message} title={title} />
          </Backdrop>
        ,overlay
        )
      }
    </>
  )
}