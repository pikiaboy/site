/* eslint-disable import/no-cycle */
import React from 'react';
import Cat from './Cat';
import ClearScreen from './clearScreen';
import LS from './ls';
import UnknownCommand from './UnknownCommand';

const commands = {
    cat: {
        value: 'cat',
        callback: Cat
    },
    CLEAR_SCREEN: {
        value: 'CLEAR_SCREEN',
        callback: ClearScreen
    },
    ls: {
        value: 'ls',
        callback: LS
    },
    screenFetch: 'screenfetch',
    '': {
        value: '',
        callback: UnknownCommand
    },
    sudo: {
        value: 'sudo',
        callback: () => <div>Lol, you wish</div>
    }
};

export { commands };
