let proposedNumber = 0;
function numberPlayer1() {
    let errorMessage = "";
    proposedNumber = parseInt(
        prompt(
            "Player 1, please give player 2 a number to guess between 0 and 50."
        )
    );
    while (isNaN(proposedNumber) || proposedNumber < 0 || proposedNumber > 50) {
        if (isNaN(proposedNumber)) {
            errorMessage = "Player 1, this is not a number, please try again.";
        } else {
            errorMessage =
                "Player 1, the number is not between 0 and 50, please try again.";
        }
        proposedNumber = parseInt(prompt(errorMessage));
    }
    return proposedNumber;
}

let givenNumber = 0;
let guesses = 0;
function numberPlayer2() {
    let inputNumber = document.getElementById("guessNumber");
    givenNumber = parseInt(inputNumber.value);
    if (isNaN(givenNumber)) {
        alert("Player 2, this is not a number, please try again.");
        return givenNumber;
    }
    let win = didIWin(givenNumber, proposedNumber);
    if (!win) {
        inputNumber.value = "";
    }
    if (win) {
        document.getElementById("guessMyNumber").className = "invisible";
        document.getElementById("guesses").className = "invisible";
        document.getElementById("congratulations").className = "visible";
    }
}
console.log("givenNumber :", givenNumber, typeof givenNumber);

function didIWin(guessingNumber, numberToGuess) {
    guesses += 1;
    if (guessingNumber == numberToGuess) {
        return true;
    } else if (guessingNumber > numberToGuess) {
        alert("Lower !");
        return false;
    } else {
        alert("Higher !");
        return false;
    }
}

function gamePlay4(event) {
    numberPlayer2();
    let inputNumber = document.getElementById("guessNumber");
    inputNumber.focus();
    event.preventDefault();
    document.getElementById("guesses").innerText = `You did ${guesses} guesses`;
}

console.log(proposedNumber, typeof proposedNumber);
