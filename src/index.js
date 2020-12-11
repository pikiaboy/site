import 'semantic-ui-css/semantic.min.css';
import './style.scss';

import Content from './Home/Content';
import React from 'react';
import SideBar from './Home/Sidebar';
import { render } from 'react-dom';

const App = () => {
    return (
        <div className="tp_app">
            <SideBar />
            <Content />
        </div>
    );
};

render(<App />, document.getElementById('root'));
