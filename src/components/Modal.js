import React, { useContext } from 'react';
import { Store } from '../Store';
import { Dialog } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';
import '@reach/dialog/styles.css';

const Modal = () => {
  const { state, dispatch } = useContext(Store);
  const { showModal, modalData } = state;

  const close = () => {
    return dispatch({
      type: 'SET_MODAL',
      payload: { showModal: false, modalData: {} },
    });
  };

  const { gtin14, brand_name } = modalData;

  return (
    <Dialog isOpen={showModal} onDismiss={close} aria-label="Edit item">
      <button className="close-button" onClick={close}>
        <VisuallyHidden>Close</VisuallyHidden>
        <span aria-hidden>×</span>
      </button>
      <div>{gtin14}</div>
      <div>{brand_name}</div>
    </Dialog>
  );
};

export default Modal;
