import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import uuid from "react-native-uuid";

export const Add = ({ show, onHide, triggerChanges }) => {
  const handleSubmit = (event) => {
    const { form } = event.target;
    const body = {};

    for (const field of form) {
      if (field.type === "button") {
        continue;
      }

      if (!field.validity.valid) {
        return;
      }

      const { name, value } = field;

      if (name && value) {
        body[field.name] = field.value;
      }
    }

    body["shared_id"] = uuid.v4();

    event.preventDefault();

    (async () => {
      const response = await fetch("http://localhost:3012/contributions", {
        method: "POST",
        body: JSON.stringify(body)
      });

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
          <Modal.Title>Add a new contribution</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" placeholder="Enter title" required="required" />

            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="description" placeholder="Enter description" required="required" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
