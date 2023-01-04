import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

import { Add } from './modals/Add';
import { Contribution } from './Conribution';

export const Contributions = ({magicNumber, setMagicNumber}) => {
  const [contributionList, setContributionList] = useState([]);
  const [developerList, setDeveloperList] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  const fetchDevelopers = async () => {
    const response = await fetch("http://localhost:3012/users");
    const body = await response.json();
    setDeveloperList(body);

    return body;
  };

  const fetchContributions = async () => {
    const response = await fetch("http://localhost:3012/contributions");
    const body = await response.json();

    const developers = await fetchDevelopers();
    const updatedBody = body.map((element) => {
      const developer = developers.find((dev) => dev.shared_id === element.shared_id);
      if (developer) {
        element.author = developer.name;
      }

      return element;
    });

    setContributionList(updatedBody);
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

      <Add show={showAdd} onHide={() => setShowAdd(false)} triggerChanges={triggerChanges} data={developerList} />

      <Table hover>
        <tbody>
          {contributionList.map((element) => <Contribution key={element._id} data={element} triggerChanges={triggerChanges} />)}
        </tbody>
      </Table>
    </Container>
  )
}
