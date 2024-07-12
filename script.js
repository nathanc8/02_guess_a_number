var proposed_number;
var number_player1 = function () {
    proposed_number = parseInt(prompt('Player 1, give player 2 a number to guess'));
    var error_message;
    while (isNaN(proposed_number) || proposed_number < 0 || proposed_number > 50) {
        if (isNaN(proposed_number)) {
            error_message = 'This is not a number, please try again';
        }
        else {
            error_message = "The number isn't between 0 and 50";
        }
        proposed_number = parseInt(prompt(error_message));
    }
    console.log('proposed number is : ' + proposed_number, typeof proposed_number);
    return proposed_number;
};
var number_player2 = function () {
    var input_number = document.getElementById('guess_number');
    var given_number = parseInt(input_number.value);
    input_number.value = '';
    console.log('given_number is ' + given_number, typeof given_number);
    if (isNaN(given_number)) {
        given_number = parseInt(prompt('This is not a number, please try again.'));
    }
    return given_number;
};
var did_i_win = function (given_number, correct_number) {
    if (given_number === correct_number) {
        return true;
    }
    else if (given_number < correct_number) {
        alert('Higher !');
    }
    else {
        alert('Lower !');
    }
    return false;
};
var guess = 0;
var gameplay = function (event) {
    var win = false;
    if (!win) {
        var guessing_number = number_player2();
        console.log('guessing_number is : ' + guessing_number, typeof guessing_number);
        event.preventDefault();
        win = did_i_win(guessing_number, proposed_number);
        guess += 1;
        console.log(guess);
        document.getElementById('guesses').innerText = "You did ".concat(guess, " guesses");
        if (win) {
            document.getElementById('game').className = 'invisible';
            document.getElementById('congratulations').className = 'visible';
        }
    }
};
