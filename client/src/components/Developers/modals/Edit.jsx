import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';

export const Edit = ({ show, onHide, data, triggerChanges }) => {
  const [inputName, setInputName] = useState(data.name);
  const [inputCountry, setInputCountry] = useState(data.country);
  const [inputStack, setInputStack] = useState(data.stack);

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
      const response = await fetch(`http://localhost:3012/users/${data.id}`, {
        method: "PUT",
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
          <Modal.Title>Edit developer information</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" value={inputName} onChange={(event) => setInputName(event.target.value)} required="required" />

            <Form.Label>Country</Form.Label>
            <Form.Control type="text" name="country" placeholder="Enter country" value={inputCountry} onChange={(event) => setInputCountry(event.target.value)} required="required" />

            <Form.Label>Stack</Form.Label>
            <Form.Control type="text" name="stack" placeholder="Enter technology stack" value={inputStack} onChange={(event) => setInputStack(event.target.value)} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Save changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
