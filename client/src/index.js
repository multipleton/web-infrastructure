import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Developers } from './components/Developers';
import { Contributions } from './components/Contributions';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Main = () => {
  const [magicNumber, setMagicNumber] = useState(0);

  return (
    <React.StrictMode>
      <Tab.Container id="left-tabs-example" defaultActiveKey="developers">
        <Row className="m-3">
          <Nav variant="pills" className="">
            <Nav.Item className="mx-1">
              <Nav.Link eventKey="developers">Developers</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mx-1">
              <Nav.Link eventKey="contributions">Contributions</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row className="m-3">
          <Tab.Content>
            <Tab.Pane eventKey="developers">
              <Developers magicNumber={magicNumber} setMagicNumber={setMagicNumber} />
            </Tab.Pane>
            <Tab.Pane eventKey="contributions">
              <Contributions magicNumber={magicNumber} setMagicNumber={setMagicNumber} />
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </Tab.Container>
    </React.StrictMode>
  );
}

root.render(
  <Main />
);
