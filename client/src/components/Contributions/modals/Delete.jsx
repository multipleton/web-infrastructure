import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const Delete = ({ show, onHide, id, triggerChanges }) => {
  const handleSubmit = (event) => {
    (async () => {
      const response = await fetch(`http://localhost:3012/contributions/${id}`, {
        method: "DELETE"
      });

      const answer = await response.text();
      console.log(answer);

      if (response.ok) {
        onHide();
        triggerChanges();
      }
    })();
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Delete contribution</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="danger" type="submit" onClick={handleSubmit}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
