import React, { useContext } from 'react';
import { Store } from '../../Store';
import { ItemService } from '../../service/ItemService';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const itemService = new ItemService();

const ItemModal = () => {
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
      payload: { showModal: true, modalData: { ...modalData, [id]: value } },
    });
  };

  const handleOnChangeCheckbox = e => {
    const { id, checked } = e.target;
    return dispatch({
      type: 'SET_MODAL',
      payload: { showModal: true, modalData: { ...modalData, [id]: checked } },
    });
  };

  const handleDelete = () => {
    itemService.deleteItemByID(modalData._id);
    close();
  };

  const handleSubmit = () => {
    if (modalData._id) {
      itemService.updateItemByID(modalData._id, modalData);
    } else {
      itemService.createItem(modalData);
    }
    close();
  };

  return (
    <Modal
      show={showModal}
      onHide={close}
      aria-label={modalData._id ? 'Edit item' : 'Add new Item'}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {modalData._id ? 'Edit item' : 'Add new Item'}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
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
            <Form.Control
              type="number"
              value={price}
              onChange={handleOnChange}
            />
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={!modalData.name || !modalData.price}
        >
          Submit
        </Button>
        {modalData._id && (
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ItemModal;
