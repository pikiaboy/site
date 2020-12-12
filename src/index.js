import 'semantic-ui-css/semantic.min.css';
import './style.scss';

import React from 'react';
import { render } from 'react-dom';
import Content from './Home/Content';
import SideBar from './Home/Sidebar';

const App = () => (
  <div className="tp_app">
    <SideBar />
    <Content />
  </div>
    );

render(<App />, document.getElementById('root'));
