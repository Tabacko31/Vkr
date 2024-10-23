import  { useEffect, useState } from 'react';
import './dialog.css';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);


  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(()=>{
    setShowModal(true)
  },[])


  return (
    <div className="modal-container">
      {showModal ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Мастеров Артем</p>
            <p>Конструирвование ПС учета и анализа объявлений сервиса аренды жилых помещений</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;