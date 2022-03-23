function pageLoad() {

}

function playGame() {
    document.getElementById('firstPopUp').style.visibility = 'hidden';
    document.getElementById('firstPopUp').remove();
    document.getElementById('mainPage').classList = 'mainPageVisible';
    document.getElementById('userInputBox').classList = 'userInputBoxVisible'

    initBoard();
}

function initBoard() {
    /* Initialise the board 
        Options are already chosen at this point by the user.
        Grabs a current word and refresehes the board.
    */
    let DEBUG = true;
    currentWord = __getRandomWord(validWords);
    //currentWord = 'SOUCT'  // souts
    for (row = 0; row < total_number_of_guesses; row++)
        __addFullRow();
    if (DEBUG) {
        console.log("THE CORRECT WORD IS : " + currentWord);
    }
}

function clickedLetter(e) {
  inputBox = document.getElementById('userInputBox')
  theLetter = e.querySelector('p').textContent
  inputBox.value = inputBox.value + theLetter
}
function enterBut(){
  __registerNewWord()
}