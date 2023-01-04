import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Developers } from './components/Developers';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
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
            <Developers />
          </Tab.Pane>
          <Tab.Pane eventKey="contributions">
            <h1>Contributions</h1>
          </Tab.Pane>
        </Tab.Content>
      </Row>
    </Tab.Container>
  </React.StrictMode>
);
