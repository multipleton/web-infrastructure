import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

import { Add } from './modals/Add';
import { Contribution } from './Conribution';

export const Contributions = () => {
  const [contributionList, setContributionList] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [magicNumber, setMagicNumber] = useState(0);

  const fetchContributions = async () => {
    const response = await fetch("http://localhost:3012/contributions");
    const body = await response.json();

    setContributionList(body);
  };

  const triggerChanges = () => {
    setMagicNumber((oldMagic) => oldMagic + 1);
  };

  useEffect(() => {
    fetchContributions();
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
          {contributionList.map((element) => <Contribution key={element._id} data={element} triggerChanges={triggerChanges} />)}
        </tbody>
      </Table>
    </Container>
  )
}
