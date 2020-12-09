import 'semantic-ui-css/semantic.min.css';
import './style.scss';

import { Icon } from 'semantic-ui-react';
import React from 'react';
import SideBar from './Home/SideBar';
import { render } from 'react-dom';

const App = () => {
    return (
        <div className="tp_app">
            <SideBar />
            <div className="tp_content">
                <Icon name="rain" size="massive" color="blue" />
                I'm still under development, check back soon for updates!
            </div>
        </div>
    );
};

render(<App />, document.getElementById('root'));
