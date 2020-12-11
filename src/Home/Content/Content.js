import './style.scss';

import React, { useState } from 'react';

import { v1 as uuidv4 } from 'uuid';

const CLEAR_SCREEN = 'CLEAR_SCREEN';

const commands = ['cat', 'help', 'ls', 'screenfetch'];

const Prompt = ({ onCommand }) => {
    const [inputDisabled, setInputDisabled] = useState(false);
    const [command, setCommand] = useState('');

    const renderCommand = () => {
        switch (command) {
            case 'ls':
                return (
                    <div>
                        <div>about-me.txt</div>
                        <div>current-job.txt</div>
                        <div>fun-facts.txt</div>
                    </div>
                );
                break;
            case 'cat':
                break;
            case 'screenfetch':
                break;
            default:
                return <span />;
                break;
        }
    };

    const handleKeyDown = (e) => {
        const { code, ctrlKey, key, target } = e;

        if (ctrlKey && key === 'l') {
            onCommand(CLEAR_SCREEN);
            return;
        }

        if (code !== 'Enter') {
            return;
        }

        if (!commands.includes(target.value)) {
            console.log('Unknown command');
        }
        setInputDisabled(true);
        setCommand(target.value);
        onCommand(target.value);
    };

    return (
        <div className="tp_terminal_prompt">
            <code className="tp_terminal_dir">
                <span style={{ color: '#009c9c' }}>thomas@tpham.dev</span>:{' '}
                <span style={{ color: 'blue' }}>~</span>
            </code>
            <div className="tp_terminal_input">
                <span style={{ fontSize: '.8rem', position: 'absolute' }}>
                    ᐅ
                </span>
                <input
                    autoFocus
                    disabled={inputDisabled}
                    className="tp_actual_input"
                    onKeyDown={handleKeyDown}
                    spellCheck={false}
                />
                {renderCommand()}
            </div>
        </div>
    );
};

const Terminal = () => {
    const [prompts, setPrompts] = useState([
        <Prompt
            key={uuidv4()}
            onCommand={(command) => addPrompt(prompts, command)}
        />
    ]);

    const addPrompt = (oldPrompts, command) => {
        if (command === CLEAR_SCREEN) {
            /**
             * We return an array that references a new empty array to deal with state clousers. 
             * 
             * Calling it like this
             * setPrompts([
             *      <Prompt
                        key={uuidv4()}
                        onCommand={(command) => addPrompt(prompt, command)}
             *  ])
             * will cause prompt to still contain old prompts since the state did not get a chance to update 
             */
            setPrompts(() => {
                const newPrompts = [
                    <Prompt
                        key={uuidv4()}
                        onCommand={(command) => addPrompt(newPrompts, command)}
                    />
                ];
                return newPrompts;
            });

            return;
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

const Content = () => {
    return (
        <div className="tp_content">
            <Terminal />
        </div>
    );
};

export default Content;
