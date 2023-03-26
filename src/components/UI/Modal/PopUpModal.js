import styles from 'popUpMessage.module.scss';

function PopUpMarkup({ message, title }) {
  return (
    <div className={styles.popUpContainer}>
      <h2> {title} </h2>
      
      <p>{message}</p>
      
      <div className={styles.btnCont}>
        <button>Close</button>
      </div>
    </div>
  )
}


export default function PopUpModal({ message, title }) {

  const overlay = document.querySelector('#overlay');

  return (
    <>
      {ReactDOM.createPortal(
        <PopUpMarkup message={message} title={title} />
      ,overlay
      )}
    </>
  )
}