import React from 'react';
import { v1 as uuidv4 } from 'uuid';
import Prompt from '../Pormpt';

/**
 * @argument setPrompts -> state setting function from parent.
 * @argument addPrompt -> function to add a new prompt to the terminal.
 */
const clearScreen = (setPrompts, addPrompt) => {
    /**
     * We return an array that references a new empty array to deal with state clousers. 
     * 
     * Calling it like this
     * setPrompts([
     *      <Prompt
                key={uuidv4()}
                onCommand={(command) => addPrompt(prompt, command)}])
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
};

export default clearScreen;
