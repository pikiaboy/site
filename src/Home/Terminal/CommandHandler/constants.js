/* eslint-disable import/no-cycle */
import React from 'react';
import Cat from './Cat';
import ClearScreen from './clearScreen';
import LS from './ls';
import UnknownCommand from './UnknownCommand';
import Open from './Open';


const createCommand = (Command) => {
    return (arguements) => <Command arguements={arguements} />;
}

const commands = {
    cat: {
        value: 'cat',
        callback: createCommand(Cat)
    },
    CLEAR_SCREEN: {
        value: 'CLEAR_SCREEN',
        callback: createCommand(ClearScreen)
    },
    ls: {
        value: 'ls',
        callback: createCommand(LS)
    },
    open: {
        value: 'open',
        callback: createCommand(Open)
    },
    screenFetch: 'screenfetch',
    '': {
        value: '',
        callback: createCommand(UnknownCommand)
    },
    sudo: {
        value: 'sudo',
        callback: () => <div>Lol, you wish</div>
    }
};

export { commands };
