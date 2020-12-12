import './style.scss';

import React, { useState } from 'react';

import Prompt from './Pormpt';
import clearScreen from './CommandHandler/clearScreen';
import { commands } from './constants';
import { v1 as uuidv4 } from 'uuid';

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
                onCommand={(command) => addPrompt(changedPrompts, command)}
            />
        ];
        setPrompts(changedPrompts);
    };

    return (
        <div className="tp_terminal">
            <div className="tp_terminal_header">Header</div>
            <div style={{ marginBottom: 0 }} className="tp_terminal_body">
                {prompts}
            </div>
        </div>
    );
};

export default Terminal;
