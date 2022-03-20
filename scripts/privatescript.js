textboxElem = document.getElementById("userInputBox")
console.log("STARTING GAME")
textboxElem.addEventListener('change', function (e) {
    if (__isWordAValidWord(e.target.value.toUpperCase())) {
        listOfAllGuesses.push(e.target.value.toUpperCase());
        result = __addNewGuessedWordToDisplay(currentWord)   ///  and this word to the display    
        if (result == 5) {
            // This is a winning combination of letters.

        }
    }
    e.target.value = '';
})
function __getRandomWord(theWordList) {
    // returns a random word from the dictionary
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
    for (item = 0; item < 5; item++) {
        __addABoxToTheGrid()
    }
}
function __addNewGuessedWordToDisplay(correctWrd) {
    let DEBUG = false
    let currentGuess = [];
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
            alphaBlocks[alphaIndex].parentNode.style.backgroundColor = 'green'
        } else {
            displayBoxes.childNodes[t + (startingRow * 5)].classList = 'box boxUsedLocation'
            alphaBlocks[alphaIndex].parentNode.style.backgroundColor = 'grey'
        }
    }
    for (t = 0; t < 5; t++) {
        if (correctWord.indexOf(listOfAllGuesses[startingRow][t]) > -1) {
            alphaIndex = listOfAllGuesses[startingRow][t].charCodeAt(0) - 65 //grab the letter index of the guessed word 
            displayBoxes.childNodes[t + (startingRow * 5)].classList = 'box boxWrongLocation'
            alphaBlocks[alphaIndex].parentNode.style.backgroundColor = 'orange'
        }
    }
    //  Check if this is the maximum number of possible entries.
    return returnResult;   // if 5 returned then this is a winner
}
