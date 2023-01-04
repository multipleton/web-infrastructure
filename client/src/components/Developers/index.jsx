import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

import { Developer } from './Developer';
import { Add } from './modals/Add';

export const Developers = () => {
  const [developerList, setDeveloperList] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [magicNumber, setMagicNumber] = useState(0);

  const fetchDevelopers = async () => {
    const response = await fetch("http://localhost:3012/users");
    const body = await response.json();

    setDeveloperList(body);
  };

  const triggerChanges = () => {
    setMagicNumber((oldMagic) => oldMagic + 1);
  };

  useEffect(() => {
    fetchDevelopers();
  }, [magicNumber]);

  return (
    <Container>
      <Stack direction="horizontal" className="my-2">
        <Button className="ms-auto" onClick={() => setShowAdd(true)}>
          Add
        </Button>
      </Stack>

      <Add show={showAdd} onHide={() => setShowAdd(false)} triggerChanges={triggerChanges} />

      <Table hover>
        <tbody>
          {developerList.map((element) => <Developer key={element.id} data={element} triggerChanges={triggerChanges} />)}
        </tbody>
      </Table>
    </Container>
  )
}
