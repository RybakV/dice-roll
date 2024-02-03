// Dice Roll

let winCount        = 0;
let lossCount       = 0;
let gameCount       = 0;
let thePoint        = 0;

// var cash         = 100;
// var betInput     = document.getElementById('betField').value;
// var bet          = parseInt(betInput);

let diceOneNode      = document.getElementById('dice1');
let diceTwoNode       = document.getElementById('dice2');
let rollButton      = document.getElementById('roll-button');

rollButton.onclick   = function () {rollDices();};

function rollDices() {

    // Initial dice variables
    let diceOne   = Math.floor((Math.random() * 6) + 1);
    let diceTwo   = Math.floor((Math.random() * 6) + 1);
    let rollTotal = diceOne + diceTwo;

    console.log('Dice1: ',diceOne,' Dice2: ',diceTwo,' Total: ',rollTotal);

    //Dice reset and display
    for (let i = 1; i <= 6; i++) {
        diceOneNode.classList.remove('show-' + i);
        if (diceOne === i) {
            diceOneNode.classList.add('show-' + i);
        }
    }

    for (let k = 1; k <= 6; k++) {
        diceTwoNode.classList.remove('show-' + k);
        if (diceTwo === k) {
            diceTwoNode.classList.add('show-' + k);
        }
    }


}// END Come out roll function



