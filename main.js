// Global variables ftw
let input1 = '';
let input2 = '';
let input3 = '';
let input4 = '';
let input5 = '';
let result = '';
let switched = false;

//Codes
let heading = ''; // What should the heading start out as?

let answer = '';

// Set init to run when the window loads.
window.onload = init;

// Don't Touch
function init() {
    // Make sure we're dealing with a clean slate.
    reset();

    // Set event handlers.
    document.querySelector('#user-input1')
        .addEventListener('keyup', handleUserInput1);

    document.querySelector('#user-input2')
            .addEventListener('keyup', handleUserInput2);

    document.querySelector('#user-input3')
        .addEventListener('keyup', handleUserInput3);

    document.querySelector('#user-input4')
            .addEventListener('keyup', handleUserInput4);

    document.querySelector('#user-input5')
        .addEventListener('keyup', handleUserInput5);

    document.querySelector('#reset')
        .addEventListener('click', reset)

    document.querySelector('#switch')
        .addEventListener('click', switchGears)
}

// Don't Touch
function reset() {
     input1 = '';
     input2 = '';
     input3 = '';
     input4 = '';
     input5 = '';
     result = '';


    document.querySelector('#user-input1').value = input1;
    document.querySelector('#user-input2').value = input2;
    document.querySelector('#user-input3').value = input3;
    document.querySelector('#user-input4').value = input4;
    document.querySelector('#user-input5').value = input5;

    
    // If you feel like it, you can comment out the five queries above and use the magical one below!
    // Feel free to ask how it works.

    // document.querySelectorAll('.input').forEach(function(node) { node.value = ''});

    document.querySelector('#result').innerText = result;
}

// Switching between apps.  For later Projects
function switchGears() {
    // TODO: change the value:of 'switched' to the opposite of what it currently is

    if(switched === false) {
        heading = 'Multiplication App. - Enter Five Numbers Below.'
        reset();
        switched = true;
    } else {
        heading = '2019 Baseball Payroll Tracker.\n  Guess The Top Five Basebal Franchises, With The Highest Payroll in the MLB.\n  Example: Atlanta Braves: Enter "Braves" Below.'
        switched = false;
    }
    changeHeading();
}

// Heading for the different Apps.
function changeHeading() {
    document.querySelector('#heading').innerText = heading;
}

// Input for the Apps.
function handleUserInput1(event) {
    let userInput = event.target.value;
    if(switched === true) {
        input1 = userInput;
        printResult();

    } else {
        input1 = userInput.toLowerCase();
        answer = input1;
        printResult();
    }
}
function handleUserInput2(event) {
    let userInput = event.target.value;
    if(switched === true) {
        input2 = userInput;
        printResult();

    } else {
        input2 = userInput.toLowerCase();
        answer = input2;
        printResult();
    }
}

function handleUserInput3(event) {
    let userInput = event.target.value;
    if(switched === true) {
        input3 = userInput;
        printResult();

    } else {
        input3 = userInput.toLowerCase();
        answer = input3;
        printResult();
    }
}

function handleUserInput4(event) {
    let userInput = event.target.value;
    if(switched === true) {
        input4 = userInput;
        printResult();
        
    } else {
    input4 = userInput.toLowerCase();
    answer = input4;
    printResult();
    }
}

function handleUserInput5(event) {
    let userInput = event.target.value;
    if(switched === true) {
        input5 = userInput;
        printResult();

    } else {
        input5 = userInput.toLowerCase();
        answer = input5;
        printResult();
    }
}

// Main Loops for different apps.
function printResult() {
    if (switched === true) {
        if (input1.length > 0 && input2.length > 0 && input3.length > 0 && input4.length > 0 && input5.length > 0)
        {
            result = input1 * input2 * input3 * input4 * input5;
        }
        else {
            result = 'Continue Typing Numbers';
        }         
        document.querySelector('#result').innerText = result;
    } 

    else if (switched === false) {

let team = ['red sox', 'cubs', 'yankees', 'dodgers', 'angels'];
let i = 0;
let count = 0;

// Switch Statement
if (input1.length > 0 && input2.length > 0 && input3.length > 0 && input4.length > 0 && input5.length > 0){

    for (i = 0; i < team.length; i = i + 1){
        if (input1 === team[i] || input2 === team[i] || input3 === team[i] ||input4 === team[i] || input5 === team[i]) {
            count = count + 1;
        }
        
        else {
            result = 'Sorry! None of these teams are on the top 5.'
        }
        result = count + ' Correct Matches';
    }
}

    else {
        result = 'Continue Typing Input';
    }
        
        document.querySelector('#result').innerText = result;

}
}

    // result = "#1. Boston Red Sox's Total Payroll: 221 millions";
    // }
    // else if (answer === 'cubs'){
    // result = "#2. Chicago Cubs' Total Payroll: 210 millions";
    // }
    // else if (answer === 'yankees'){
    // result = "#3. New York Yankees' Total Payroll: 198 millions";
    // }
    // else if (answer === 'dodgers'){
    // result = "#4. Los Angeles Dodgers' Total Payroll: 193 millions";
    // }
    // else if (answer === 'angels'){
    // result = "#5. Los Angeles Angels' Total Payroll: 167 millions";
    // }
    // else {
    // result = 'Sorry! Team is not on the Top 5! Try Again!';
    // }



