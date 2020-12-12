/* eslint-disable import/no-cycle */
import PropTypes from 'prop-types';
import UnknownCommand from './UnknownCommand';
import { commands as listOfCommands } from './constants';

const CommandHandler = ({ arguements, command }) => {
    const commandToExecute = listOfCommands[command]
        ? listOfCommands[command].callback
        : UnknownCommand;

    return commandToExecute(arguements);
};

CommandHandler.propTypes = {
    arguements: PropTypes.arrayOf(PropTypes.string),
    command: PropTypes.string
};

export default CommandHandler;
