var rollDice = function () {
  // produce a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;
  // remove the decimal
  var randomInteger = Math.floor(randomDecimal);
  // add 1 to get a number between 1 and 6 inclusive
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var main = function (input) {
  var myOutputValue = "";

  // first check if input is a number
  if (Number.isNaN(Number(input)) == true) {
    myOutputValue = "sorry please enter a number.";
  } else {
    // then check if input is between 1 and 6
    if (input < 1 || input > 6) {
      myOutputValue = "sorry please enter a number from 1 - 6";
    } else {
      // the input is 1-6, go ahead with the dice game
      var randomDiceNumber = rollDice();
      if (randomDiceNumber == input) {
        myOutputValue = "you win";
      } else {
        myOutputValue = "you lose";
      }
    }
  }

  return myOutputValue;
};


var whatToEat = function(buyGroceries) {
let outputMessage;

if (buyGroceries == true) {
  outputMessage = 'We are having dinner at home tonight!';
}
else if (buyGroceries == true) {
  outputMessage = 'We could be having dinner at kopitiam...';
}
else (buyGroceries = false) {
  outputMessage = 'We are ordering GrabFood instead!';
}
return outputMessage;

};
