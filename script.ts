let proposed_number: number;
const number_player1 = (): number => {
    proposed_number = parseInt(prompt('Player 1, give player 2 a number to guess')!);
    let error_message: string;
    while (isNaN(proposed_number) || proposed_number < 0 || proposed_number > 50) {
        if (isNaN(proposed_number)) {
            error_message = 'This is not a number, please try again';
        } else {
            error_message = "The number isn't between 0 and 50";
        }
        proposed_number = parseInt(prompt(error_message)!);
    }
    console.log('proposed number is : ' + proposed_number, typeof proposed_number);
    return proposed_number;
};

const number_player2 = (): number => {
    let input_number = document.getElementById('guess_number') as HTMLInputElement;
    let given_number = parseInt(input_number.value);
    input_number.value = '';
    console.log('given_number is ' + given_number, typeof given_number);
    if (isNaN(given_number)) {
        given_number = parseInt(prompt('This is not a number, please try again.')!);
    }
    return given_number;
};

const did_i_win = (given_number: number, correct_number: number): boolean => {
    if (given_number === correct_number) {
        return true;
    } else if (given_number < correct_number) {
        alert('Higher !');
    } else {
        alert('Lower !');
    }
    return false;
};

let guess: number = 0;
const gameplay = (event): void => {
    let win: boolean = false;
    if (!win) {
        let guessing_number = number_player2();
        console.log('guessing_number is : ' + guessing_number, typeof guessing_number);
        event.preventDefault();
        win = did_i_win(guessing_number, proposed_number);
        guess += 1;
        console.log(guess);
        document.getElementById('guesses')!.innerText = `You did ${guess} guesses`;
        if (win) {
            document.getElementById('game')!.className = 'invisible';
            document.getElementById('congratulations')!.className = 'visible';
        }
    }
};
