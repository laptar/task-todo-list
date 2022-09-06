import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { togleModal, updateFalse } from 'Redux/reducer';

import s from './Modal.module.css';

export const Modal = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(togleModal());
        dispatch(updateFalse());
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);
  const handleClose = () => {
    dispatch(togleModal());
    dispatch(updateFalse());
  };
  return (
    <div className={s.overlay} data-overlay>
      <div className={s.modal}>
        <button className={s.close} type="button" onClick={handleClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};
