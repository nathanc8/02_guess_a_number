var number_player1 = function () {
    var proposed_number = parseInt(prompt("Player 1, give player 2 a number to guess"));
    var error_message;
    while (isNaN(proposed_number) ||
        proposed_number < 0 ||
        proposed_number > 50) {
        if (isNaN(proposed_number)) {
            error_message = "This is not a number, please try again";
        }
        else {
            error_message = "The number isn't between 0 and 50";
        }
        proposed_number = parseInt(prompt(error_message));
    }
    console.log(proposed_number);
    return proposed_number;
};
//number_player1();
var number_player2 = function () {
    var given_number = parseInt(prompt("Player 2, try to guess  the number !"));
    while (isNaN(given_number))
        given_number = parseInt(prompt("This is not a number, please try again."));
    return given_number;
};
var did_i_win = function (given_number) {
    var win = false;
    while (!win) {
        if (given_number === 22) {
            alert("Congrats ! You guessed the number");
            win = true;
        }
        else if (given_number < 22) {
            alert("Higher !");
        }
        else {
            alert("Lower !");
        }
    }
    return win;
};
var gameplay = function () {
    var win = false;
    while (!win) {
        var guessing_number = number_player2();
        win = did_i_win(guessing_number);
    }
};
gameplay();
