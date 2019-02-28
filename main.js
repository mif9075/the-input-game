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
// let teams = ['red sox', 'cubs', 'yankees', 'dodgers', 'angels'];



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
    input1 = userInput.toLowerCase();
    answer = input1;
    printResult();

    // if(switched) {
        // TODO: handle the input for one app version
    // } else {
        // TODO:  handle the input for one app version

// Test
// document.querySelector('#result').innerText = input1;
}

function handleUserInput2(event) {
    let userInput = event.target.value;
    input2 = userInput.toLowerCase();
    answer = input2;
    printResult();
}

function handleUserInput3(event) {
    let userInput = event.target.value;
    input3 = userInput.toLowerCase();
    answer = input3;
    printResult();
}

function handleUserInput4(event) {
    let userInput = event.target.value;
    input4 = userInput.toLowerCase();
    answer = input4;
    printResult();
}

function handleUserInput5(event) {
    let userInput = event.target.value;
    input5 = userInput.toLowerCase();
    answer = input5;
    printResult();
}

// Main Loops for different apps.
function printResult() {

// Switch Statement
if (input1.length > 0, input2.length > 0, input3.length > 0, input4.length > 0, input5.length > 0){
    if (answer === 'red sox'){
    result = "#1. Boston Red Sox's Total Payroll: 221 millions";
    }
    else if (answer === 'cubs'){
    result = "#2. Chicago Cubs' Total Payroll: 210 millions";
    }
    else if (answer === 'yankees'){
    result = "#3. New York Yankees' Total Payroll: 198 millions";
    }
    else if (answer === 'dodgers'){
    result = "#4. Los Angeles Dodgers' Total Payroll: 193 millions";
    }
    else if (answer === 'angels'){
    result = "#5. Los Angeles Angels' Total Payroll: 167 millions";
    }
    else {
    result = 'Sorry! Team is not on the Top 5! Try Again!';
    }
}
else {
    result = 'Continue typing input';
}
    document.querySelector('#result').innerText = result;
}


// 6		San Francisco Giants 	40 	$143,592,777 	$21,000,000 	- 	- 	- 	$164,592,777
// 7		New York Mets 	40 	$142,556,666 	- 	$15,000,000 	- 	- 	$157,556,666
// 8		Washington Nationals 	40 	$157,455,561 	- 	- 	- 	- 	$157,455,561
// 9		St. Louis Cardinals 	40 	$151,001,666 	- 	$5,000,000 	- 	- 	$156,001,666
// 10		Houston Astros 	39 	$152,522,500 	- 	$500,000 	- 	- 	$153,022,500
// 11		Seattle Mariners 	40 	$130,943,810 	- 	$10,000,000 	- 	- 	$140,943,810
// 12		Colorado Rockies 	40 	$138,805,833 	- 	$1,500,000 	- 	- 	$140,305,833
// 13		Philadelphia Phillies 	39 	$125,549,000 	- 	- 	- 	- 	$125,549,000
// 14		Milwaukee Brewers 	40 	$117,962,500 	- 	$2,925,000 	- 	- 	$120,887,500
// 15		Arizona Diamondbacks 	40 	$96,424,166 	$5,025,000 	- 	$15,500,000 	- 	$116,949,166
// 16		Cincinnati Reds 	40 	$116,773,214 	- 	- 	- 	- 	$116,773,214
// 17		Minnesota Twins 	40 	$108,423,333 	- 	$7,950,000 	- 	- 	$116,373,333
// 18		Texas Rangers 	40 	$95,449,999 	- 	$20,100,000 	- 	- 	$115,549,999
// 19		Cleveland Indians 	40 	$111,528,751 	- 	$250,000 	- 	- 	$111,778,751
// 20		Atlanta Braves 	40 	$109,556,043 	- 	- 	- 	- 	$109,556,043
// 21		Detroit Tigers 	41 	$92,675,000 	- 	$14,000,000 	- 	- 	$106,675,000
// 22		Toronto Blue Jays 	40 	$67,503,571 	- 	$38,595,000 	- 	- 	$106,098,571
// 23		Kansas City Royals 	40 	$84,571,667 	$800,000 	$3,525,000 	- 	- 	$88,896,667
// 24		San Diego Padres 	40 	$55,257,500 	$7,000,000 	$23,250,000 	$1,900,000 	- 	$87,407,500
// 25		Oakland Athletics 	40 	$79,018,333 	$3,150,000 	$1,000,000 	- 	- 	$83,168,333
// 26		Chicago White Sox 	40 	$79,166,668 	- 	$1,000,000 	- 	- 	$80,166,668
// 27		Miami Marlins 	40 	$63,837,142 	- 	- 	- 	- 	$63,837,142
// 28		Baltimore Orioles 	40 	$61,693,782 	- 	- 	- 	- 	$61,693,782
// 29		Pittsburgh Pirates 	40 	$57,675,002 	- 	$1,250,000 	- 	- 	$58,925,002
// 30		Tampa Bay Rays