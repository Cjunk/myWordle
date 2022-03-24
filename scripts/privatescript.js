textboxElem = document.getElementById("userInputBox")
textboxElem.addEventListener('change', function (e) {
    __registerNewWord()
})
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
function __registerNewWord() {
    /*

    */
    currentGuess++
    textboxelem = document.getElementById('userInputBox')
    if (__isWordAValidWord(textboxelem.value.toUpperCase())) {
        listOfAllGuesses.push(textboxelem.value.toUpperCase());
        result = __addNewGuessedWordToDisplay(currentWord)   ///  and this word to the display    
        if (result == 5) {
            // This is a winning combination of letters.
            __addGamesOne() 
            resetGame()

        }else {
            // check if there are any more guesses left
            if(currentGuess == total_number_of_guesses){
                // NO MORE guesses left
                resetGame()
                document.getElementById('winningStreak').textContent = '0'
            }
        }
    }
    textboxelem.value = '';
}
function __getRandomWord(theWordList) {
    // returns a random word from the dictionary
    if (DEBUG_RANDOM_WORD) {
        return DEBUG_WORD
    }
    return theWordList[Math.floor(Math.random() * theWordList.length)]
}
function __isWordAValidWord(guessedWord) {
    /*
        Will return true or false if the word guess is in the dictionary or  not
    */
    if (validWords.indexOf(guessedWord.toUpperCase()) > 0)
        return true;
    return false;
}
function __addABoxToTheGrid() {
    /* Code responsible for adding a single letter box to the grid */
    gridElem = document.getElementById('row');
    newBoxElem = document.createElement('div');
    newPElem = document.createElement('p');
    newPElem.classList = 'boxLetter';
    newBoxElem.classList = "box unusedBox";
    newBoxElem.appendChild(newPElem);
    gridElem.appendChild(newBoxElem);
}
function __addFullRow() {
    /*
        Internal function to prepare the display with the correct number of guesses
    */
    for (item = 0; item < 5; item++) {
        __addABoxToTheGrid()
    }
}
function __addNewGuessedWordToDisplay(correctWrd) {
    /*
        Processes the users guess.
        Will add the guess to the display, note each letters status, update the chosen letters 
        clear the user input and check if the guess is correct.
    */
    let DEBUG = false
    let correctWord = []; // Create copy of the correct word so we can manipualte it
    let returnResult = 0; // used to identify the result on return from function  
    let alphaBlocks = document.querySelectorAll('.letterchoices')
    /* Gets the latest guessed word and populates the correct row*/
    displayText = document.querySelectorAll('.boxLetter')
    displayBoxes = document.querySelector('#row')
    startingRow = listOfAllGuesses.length - 1;
    if (DEBUG) {
        console.log("*************    DEBUGGING FUNCTION: __addNewGuessedWordToDisplay() ")
        console.log("startingRow = ", startingRow);
        console.log("displayRows = ", displayText);
        console.log("displayBoxes = ", displayBoxes);
        console.log(listOfAllGuesses)
    }
    for (t = 0; t < 5; t++) {  // create an array of the letters in the guessed word.
        correctWord.push(correctWrd[t])
        displayText[t + (startingRow * 5)].textContent = listOfAllGuesses[startingRow][t]

    }
    for (t = 0; t < 5; t++) {  // Mark of the correct placements
        alphaIndex = listOfAllGuesses[startingRow][t].charCodeAt(0) - 65 //grab the letter index of the guessed word        
        if (listOfAllGuesses[startingRow][t] == correctWord[t]) {
            displayBoxes.childNodes[t + (startingRow * 5)].classList = 'box boxRightLocation'
            returnResult++;
            correctWord[t] = '';  // Letter has been marked off so disregard. 
            console.log(correctWord)
            alphaBlocks[alphaIndex].parentNode.style.backgroundColor = 'green'
        }
        else {
            displayBoxes.childNodes[t + (startingRow * 5)].classList = 'box boxUsedLocation'
            alphaBlocks[alphaIndex].parentNode.style.backgroundColor = 'grey'
        }
    }
    for (t = 0; t < 5; t++) {
        if (correctWord[t] != '') {
            if (correctWord.indexOf(listOfAllGuesses[startingRow][t]) > -1) {
                alphaIndex = listOfAllGuesses[startingRow][t].charCodeAt(0) - 65 //grab the letter index of the guessed word 
                displayBoxes.childNodes[t + (startingRow * 5)].classList = 'box boxWrongLocation'
                alphaBlocks[alphaIndex].parentNode.style.backgroundColor = 'orange'
            }
        }
    }
    return returnResult;   // if 5 returned then this is a winner
}
function __addGamesOne(){
    /*
        Will increase the total Games won count by 1 and update the display
    */
   document.getElementById('totalGamesWonThisSession').textContent++
   document.getElementById('winningStreak').textContent++
}
function __initBoard() {
    /* Initialise the board .  Called only once at the start of the game play. 
        Options are already chosen at this point by the user.
        Grabs a current word and refresehes the board.
    */
    currentWord = __getRandomWord(validWords);
    //currentWord = 'SOUCT'  // souts
    for (row = 0; row < total_number_of_guesses; row++)
      __addFullRow();
    if (DEBUG) {
      console.log("THE CORRECT WORD IS : " + currentWord);
    }
}