// import functions and grab DOM elements
import { countsAsAYes } from './utils.js';

const quizButton = document.getElementById('launch-quiz');
const secretDiv = document.getElementById('secret-div');

// initialize state

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    // PSEUDOCODE
    // - launch an alert
    alert('Welcome to my quiz!');
    // - launch a confirmation
    const confirmation = confirm('Do you want to proceed?');
    //     - if the user says no, nothing else happens (`return` nothing to break out of the cool zone)
    if (!confirmation) {
    // if (confirmation === false) {

        // return just ENDS THINGS
        return;
    }

    //     - if the user says yes, launch the series of propmts
    // - launch a first name prompt
    const firstName = prompt('What is your first name?');
    //     - store that output to display later
    // - launch a last name prompt
    const lastName = prompt('What is your last name?');
    //     - store that output to display later
    // - launch quiz prompts with 3 specific yes/no questions
    const firstAnswer = prompt('Was the first patent for a rollercoaster issued in 1885?');
    let correctAnswers = 0;
    
    if (countsAsAYes(firstAnswer)) {
        // validation step!
        console.log('you got it!');

        correctAnswers++;
    } else {
        // validation step!
        console.log('failed!');
    }

    const secondAnswer = prompt('Was the Promenades Aeriennes build at Six Flags over Gerogia?');

    if (!countsAsAYes(secondAnswer)) {
        // validation step!
        console.log('you got it!');

        correctAnswers++;
    } else {
        // validation step!
        console.log('failed!');
    }

    // - make a results string
    const resultsString = 'You got ' + correctAnswers + ' correct!';  

    console.log(resultsString);

    // - display that results string
    //     - inject stuff into the `textContent` of our secret results div
    secretDiv.textContent = resultsString;
});