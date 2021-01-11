// import functions and grab DOM elements
import { countsAsAYes } from './utils.js';

// HTML Nodes, HTML Elements -- don't treat these as strings or numbers!
const quizButton = document.getElementById('launch-quiz');
const secretDiv = document.getElementById('secret-div');

// initialize state

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    alert('Welcome to my quiz!');

    const confirmation = confirm('Do you want to proceed?');
    
    if (!confirmation) return;

    let correctAnswers = 0;

    const firstName = prompt('What is your first name?');
    const lastName = prompt('What is your last name?');
    const firstAnswer = prompt('Was the first patent for a rollercoaster issued in 1885?');
    
    if (countsAsAYes(firstAnswer)) correctAnswers++;

    const secondAnswer = prompt('Was the Promenades Aeriennes build at Six Flags over Gerogia?');

    if (!countsAsAYes(secondAnswer)) correctAnswers++;

    const resultsString = `Hey ${firstName} ${lastName}! You got ${correctAnswers} correct!`;

    secretDiv.textContent = resultsString;
});