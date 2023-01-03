import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Team from './Team/Team';
import Greet from './Greet/Greet';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Team />
    <Greet />
  </React.StrictMode>
);
