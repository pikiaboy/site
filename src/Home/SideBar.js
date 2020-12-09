import './style.scss';

import React, { useState } from 'react';

import { Icon } from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react';

const SideBar = () => {
    const [activeItem, setActiveItem] = useState('closest');

    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
    };

    return (
        <div className="tp_sidebar">
            <Menu text vertical>
                <Menu.Item header>tpham.dev</Menu.Item>
                <Menu.Item
                    name="blog"
                    active={activeItem === 'blog'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name="projects"
                    active={activeItem === 'projects'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name="resume"
                    active={activeItem === 'resume'}
                    onClick={handleItemClick}
                />
            </Menu>

            <span className="tp_linkList">
                <Icon link name="facebook f" size="large" />
                <Icon link name="linkedin" size="large" />
                <Icon link name="github" size="large" />
            </span>
        </div>
    );
};

export default SideBar;
