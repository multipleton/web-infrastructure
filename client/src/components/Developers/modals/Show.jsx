import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Show = ({ show, onHide, data }) => {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Developer information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Name: {data.name}</p>
          <p>Country: {data.country}</p>
          {data.stack && <p>Technology stack: {data.stack.split(',').join(', ')}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
