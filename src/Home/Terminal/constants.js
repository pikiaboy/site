import Cat from './CommandHandler/Cat';
import ClearScreen from './CommandHandler/clearScreen';
import LS from './CommandHandler/ls';
import UnknownCommand from './CommandHandler/UnknownCommand';

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
    }
};

export { commands };
