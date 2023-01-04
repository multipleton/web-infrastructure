import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Show = ({ show, onHide, data }) => {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.description}</p>
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
