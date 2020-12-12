import UnknownCommand from './UnknownCommand';
import { commands as listOfCommands } from '../constants';

const CommandHandler = ({ arguements, command }) => {
    const commandToExecute = listOfCommands[command]
        ? listOfCommands[command].callback
        : UnknownCommand;

    return commandToExecute(arguements);
};

export default CommandHandler;
