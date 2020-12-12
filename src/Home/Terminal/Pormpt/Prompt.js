import './style.scss';

import React, { useState } from 'react';

import CommandHandler from '../CommandHandler/CommandHandler';
import { commands as listOfCommands } from '../constants';

const Prompt = ({ onCommand }) => {
    const [inputDisabled, setInputDisabled] = useState(false);
    const [command, setCommand] = useState('');
    const [arguements, setArguements] = useState([]);

    const handleKeyDown = (e) => {
        const { code, ctrlKey, key, target } = e;

        if ((ctrlKey && key === 'l') || target.value === 'clear') {
            setInputDisabled(true);
            onCommand(listOfCommands.CLEAR_SCREEN.value);
            return;
        }

        if (code !== 'Enter') {
            return;
        }

        setInputDisabled(true);
        setCommand(target.value.split(' ')[0]);
        setArguements(target.value.split(' ').slice(1));
        onCommand(target.value);
    };

    return (
        <div className="tp_terminal_prompt">
            <code className="tp_terminal_dir">
                <span style={{ color: '#009c9c' }}>thomas@tpham.dev</span>:{' '}
                <span style={{ color: 'blue' }}>~</span>
            </code>
            <div className="tp_terminal_input">
                <span style={{ fontSize: '.8rem' }}>ᐅ</span>
                <input
                    autoFocus
                    disabled={inputDisabled}
                    className="tp_actual_input"
                    onKeyDown={handleKeyDown}
                    spellCheck={false}
                />
            </div>
            <div className="tp_terminal_output">
                <CommandHandler arguements={arguements} command={command} />
            </div>
        </div>
    );
};

export default Prompt;
