/* eslint-disable import/no-cycle */
import PropTypes from 'prop-types';
import UnknownCommand from './UnknownCommand';
import { commands as listOfCommands } from './constants';

/**
 * 
 * @param {array} arguements An array of arguements passed to the command 
 * @param {string} command The name of the command 
 */
const handle = (arguements = [], command) => {
    const commandToExecute = listOfCommands[command]
        ? listOfCommands[command].callback
        : UnknownCommand;

    return commandToExecute(arguements);
};

export default {
    handle
}
