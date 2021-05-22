import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);