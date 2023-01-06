import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import { Show } from './modals/Show';
import { Delete } from './modals/Delete';

export const Contribution = ({ data, triggerChanges }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleShow = () => setShowInfo(true);

  const handleDelete = (event) => {
    event.stopPropagation();
    setShowDelete(true);
  };

  return (
    <>
      <tr>
        <td>
          <Stack direction="horizontal" gap={3} onClick={handleShow}>
            <div>{data.title}</div>
            <Button variant="light" className="ms-auto" onClick={handleDelete}>Delete</Button>
          </Stack>
        </td>
      </tr>
      <Show show={showInfo} onHide={() => setShowInfo(false)} data={data} />
      <Delete show={showDelete} onHide={() => setShowDelete(false)} id={data._id} triggerChanges={triggerChanges} />
    </>
  );
};
