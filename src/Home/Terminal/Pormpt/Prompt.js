/* eslint-disable import/no-cycle */
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import CommandHandler from '../CommandHandler/CommandHandler';
import { commands } from '../CommandHandler/constants';
import './style.scss';

const Prompt = ({ focused, onCommand }) => {
    const [inputDisabled, setInputDisabled] = useState(false);
    const [command, setCommand] = useState('');
    const [arguements, setArguements] = useState([]);
    const inputRef = useRef(null);

    if (focused) {
        inputRef.current?.focus();
    }

    const handleKeyDown = (e) => {
        const { ctrlKey, key, target } = e;

        if ((ctrlKey && key === 'l') || target.value === 'clear') {
            setInputDisabled(true);
            return onCommand(commands.CLEAR_SCREEN.value);
        }

        if (key === 'Enter') {
            setInputDisabled(true);
            const commandsAndArgs = target.value.split(' '); 
            setCommand(commandsAndArgs[0]);
            setArguements(commandsAndArgs.slice(1));
            onCommand(target.value);    
        }
    };

    return (
        <div className="tp_terminal_prompt">
            <code className="tp_terminal_dir">
                <span style={{ color: '#009c9c' }}>thomas@tpham.dev</span>:
                <span style={{ color: 'blue' }}> ~</span>
            </code>
            <div className="tp_terminal_input">
                <span style={{ fontSize: '.8rem', paddingTop: '5px' }}>ᐅ</span>
                <input
                    autoFocus
                    disabled={inputDisabled}
                    className="tp_actual_input"
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                    spellCheck={false}
                />
            </div>
            <div className="tp_terminal_output">
                {CommandHandler.handle(arguements, command)}
            </div>
        </div>
    );
};

Prompt.propTypes = {
    /**
     * True if the current prompt should be focused.
     */
    focused: PropTypes.bool,

    /**
     * Callback to tell the parent which command was just used
     */
    onCommand: PropTypes.func
};

export default Prompt;
