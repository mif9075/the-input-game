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
let teams = ['Red Sox', 'Cubs', 'Yankees', 'Dodgers', 'Angels'];


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

    if(switched) {
        heading = ''; // TODO: change the heading to whatever would be appropriate for YOUR app.
    } else {
        heading = ''; // TODO: change the heading to whatever would be appropriate for your OTHER app.
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
    input1 = userInput;
    result = input1;


    // let i = 0;

    // while (i < result.length) {
    //     if (result === teams[i]) {
    //         console.log (teams[i]);
    //     }
    // }

    // if(switched) {
        // TODO: handle the input for one app version
    // } else {
        // TODO:  handle the input for one app version

}

function handleUserInput2(event) {
    let userInput = event.target.value;
    input2 = userInput;
    result = input2;
}

function handleUserInput3(event) {
    let userInput = event.target.value;
    input3 = userInput;
    result = input3;
}

function handleUserInput4(event) {
    let userInput = event.target.value;
    input4 = userInput;
    result = input4;
}

function handleUserInput5(event) {
    let userInput = event.target.value;
    input5 = userInput;
    result = input5;
}

// Main Loops for different apps.
function printResult() {



    document.querySelector('#result').innerText = result;


}


// Switch Statement
switch (userInput) {
    case 'red sox':
    totalPayroll = '221 billions';
    break; 
    
    case 'cubs':
    totalPayroll = '210 billions';
    break;
    
    case 'yankees':
    totalPayroll = '198 billions';
    break;
    
    case 'dodgers':
    totalPayroll = '193 billions';
    break;
    
    case 'angels':
    totalPayroll = '167 billions';
    break;

    default:
    totalPayroll = 'Sorry! Team is not on the Top 5! Try Again!';
    break;
}