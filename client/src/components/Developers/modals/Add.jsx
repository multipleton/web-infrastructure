import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

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

    event.preventDefault();

    (async () => {
      const response = await fetch("http://localhost:3012/users", {
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
          <Modal.Title>Add a new user</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" required="required" />

            <Form.Label>Country</Form.Label>
            <Form.Control type="text" name="country" placeholder="Enter country" required="required" />

            <Form.Label>Stack</Form.Label>
            <Form.Control type="text" name="stack" placeholder="Enter technology stack" />
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
