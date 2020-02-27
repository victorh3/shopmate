import React, { useContext } from 'react';
import { Store } from '../../Store';
import { Dialog } from '@reach/dialog';
import { ItemService } from '../../service/ItemService';
import VisuallyHidden from '@reach/visually-hidden';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '@reach/dialog/styles.css';

const itemService = new ItemService();

const Modal = () => {
  const { state, dispatch } = useContext(Store);
  const { showModal, modalData } = state;
  const { brand_name, name, price, on_sale, notes } = modalData;

  const close = () => {
    return dispatch({
      type: 'SET_MODAL',
      payload: { showModal: false, modalData: {} },
    });
  };

  const handleOnChange = e => {
    const { id, value } = e.target;
    return dispatch({
      type: 'SET_MODAL',
      payload: { modalData: { ...modalData, [id]: value } },
    });
  };

  const handleOnChangeCheckbox = e => {
    const { id, checked } = e.target;
    return dispatch({
      type: 'SET_MODAL',
      payload: { modalData: { ...modalData, [id]: checked } },
    });
  };

  const handleDelete = () => {
    itemService.deleteItemByID(modalData._id);
  };

  const handleSubmit = () => {
    itemService.updateItemByID(modalData._id, modalData);
  };

  return (
    <Dialog isOpen={showModal} onDismiss={close} aria-label="Edit item">
      <button className="close-button" onClick={close}>
        <VisuallyHidden>Close</VisuallyHidden>
        <span aria-hidden>×</span>
      </button>
      <Form>
        <Form.Group controlId="brand_name">
          <Form.Label>Brand Name</Form.Label>
          <Form.Control
            type="text"
            value={brand_name}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={handleOnChange} />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" value={price} onChange={handleOnChange} />
        </Form.Group>
        <Form.Group controlId="on_sale">
          <Form.Label>On Sale</Form.Label>
          <Form.Control
            type="checkbox"
            checked={on_sale}
            onChange={handleOnChangeCheckbox}
          />
        </Form.Group>
        <Form.Group controlId="notes">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={notes}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        {modalData._id && (
          <Button variant="danger" type="submit" onClick={handleDelete}>
            Delete
          </Button>
        )}
      </Form>
    </Dialog>
  );
};

export default Modal;
