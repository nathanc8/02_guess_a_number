const number_player1: Function = () => {
    let given_number: number = parseInt(
        prompt("Player 1, give player 2 a number to guess")!
    );
    let error_message: string;
    while (isNaN(given_number) || given_number < 0 || given_number > 50) {
        if (isNaN(given_number)) {
            error_message = "This is not a number, please try again";
        } else {
            error_message = "The number isn't between 0 and 50";
        }
        alert(error_message);
    }
    console.log(given_number);
    return given_number;
};

number_player1();

//const did_i_win: Function = (given_number): number => {};
