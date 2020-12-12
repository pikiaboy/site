/* eslint-disable no-use-before-define */
import './style.scss';

import React, { useState } from 'react';

import Draggable from 'react-draggable';
import { v1 as uuidv4 } from 'uuid';
import Prompt from './Pormpt';
import { commands } from './CommandHandler/constants';

const Terminal = () => {
    const [prompts, setPrompts] = useState([
        <Prompt
            key={uuidv4()}
            onCommand={(command) => addPrompt(prompts, command)}
        />
    ]);

    const addPrompt = (oldPrompts, command) => {
        if (command === commands.CLEAR_SCREEN.value) {
            return commands.CLEAR_SCREEN.callback(setPrompts, addPrompt);
        }

        const changedPrompts = [
            ...oldPrompts,
            <Prompt
                key={uuidv4()}
                onCommand={(currentCommand) =>
                    addPrompt(changedPrompts, currentCommand)
                }
            />
        ];
        return setPrompts(changedPrompts);
    };

    return (
        <Draggable handle=".tp_terminal_header" scale={1}>
            <div className="tp_terminal">
                <div className="tp_terminal_header">Header</div>
                <div style={{ marginBottom: 0 }} className="tp_terminal_body">
                    {prompts}
                </div>
            </div>
        </Draggable>
    );
};

export default Terminal;
