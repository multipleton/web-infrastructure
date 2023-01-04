import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import { Show } from './modals/Show';
import { Edit } from './modals/Edit';
import { Delete } from './modals/Delete';

export const Developer = ({ data, triggerChanges }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleShow = () => setShowInfo(true);

  const handleEdit = (event) => {
    event.stopPropagation();
    setShowEdit(true);
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    setShowDelete(true);
  };

  return (
    <>
      <tr>
        <td>
          <Stack direction="horizontal" gap={3} onClick={handleShow}>
            <div>{data.name}</div>
            <Button variant="light" className="ms-auto" onClick={handleEdit}>Edit</Button>
            <Button variant="light" onClick={handleDelete}>Delete</Button>
          </Stack>
        </td>
      </tr>
      <Show show={showInfo} onHide={() => setShowInfo(false)} data={data} />
      <Edit show={showEdit} onHide={() => setShowEdit(false)} data={data} triggerChanges={triggerChanges} />
      <Delete show={showDelete} onHide={() => setShowDelete(false)} id={data.id} triggerChanges={triggerChanges} />
    </>
  );
};
