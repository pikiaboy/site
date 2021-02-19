/* eslint-disable no-use-before-define */
import './style.scss';

import React, { useState } from 'react';

import Draggable from 'react-draggable';
import { v1 as uuidv4 } from 'uuid';
import Prompt from './Pormpt';
import { commands } from './CommandHandler/constants';

const Terminal = () => {
    const [showLoginMessage, setShowLoginMessage] = useState(true);

    const [prompts, setPrompts] = useState([
        <Prompt
            key={uuidv4()}
            onCommand={(command) => addPrompt(prompts, command)}
        />,
    ]);

    const addPrompt = (oldPrompts, command) => {
        if (command === commands.CLEAR_SCREEN.value) {
            setShowLoginMessage(false);
            return commands.CLEAR_SCREEN.callback(setPrompts, addPrompt);
        }

        const changedPrompts = [
            ...oldPrompts,
            <Prompt
                key={uuidv4()}
                onCommand={(currentCommand) =>
                    addPrompt(changedPrompts, currentCommand)
                }
            />,
        ];
        return setPrompts(changedPrompts);
    };

    const renderLoginMessage = () => (
        <div style={{ marginLeft: '15px' }}>
            <span>Welcome to tPham.dev</span>
            <ul>
                <li>ls = show avaliable files</li>
                <li>cat fileName = print out file content </li>
                <li>ctrl + L or clear = clear the screen</li>
            </ul>
        </div>
    );

    const handleBodyClick = () => {
        const currentPrompt = prompts.slice(prompts.length - 1)[0];
        setPrompts([
            ...prompts.slice(0, prompts.length - 1),
            React.cloneElement(currentPrompt, { focused: true }),
        ]);
    };

    return (
        <Draggable handle=".tp_terminal_header" scale={1}>
            <div className="tp_terminal">
                <div className="tp_terminal_header">tPham.dev</div>
                <div
                    className="tp_terminal_body"
                    onClick={handleBodyClick}
                    style={{ marginBottom: 0 }}
                >
                    {showLoginMessage && renderLoginMessage()}
                    {prompts}
                </div>
            </div>
        </Draggable>
    );
};

export default Terminal;
