textboxElem = document.getElementById("userInputBox")
textboxElem.addEventListener('change', function (e) {
    enterBut()
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
   let result = 0;
    currentGuess++
    textboxelem = document.getElementById('userInputBox')
    if (__isWordAValidWord(textboxelem.value.toUpperCase())) {
        listOfAllGuesses.push(textboxelem.value.toUpperCase());
        result = __addNewGuessedWordToDisplay(currentWord)   ///  and this word to the display  
        if (result == 5) {
            // This is a winning combination of letters.
            //youGuessedCorrectly();
            __addGamesOne() 
        }else {
            // check if there are any more guesses left
            if(currentGuess == total_number_of_guesses){
                // NO MORE guesses left
                document.getElementById('winningStreak').textContent = '0'
                noMoreGuesses();
            }
        }
    }else {
        invalidWordAlert();
    }
    textboxelem.value = '';
    return result
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
function reduceTheanimationCount() {
    animationNotComplete = animationNotComplete -1;
}
function __addNewGuessedWordToDisplay(correctWrd) {  //correctWrd is the actual random/secret word
    /*
        Processes the users guess.
        Will add the guess to the display, note each letters status, update the chosen letters 
        clear the user input and check if the guess is correct.
    */
    let DEBUG = false
    let correctWordArry = []; // Create copy of the correct word so we can manipualte it
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
    for (t = 0; t < 5; t++) {  // add to array of the letters in the guessed word and display them
        correctWordArry.push(correctWrd[t])
        displayText[t + (startingRow * 5)].textContent = listOfAllGuesses[startingRow][t]
    }
    for (t = 0; t < 5; t++) {  // Mark of the correct placements
        alphaIndex = listOfAllGuesses[startingRow][t].charCodeAt(0) - 65 //grab the letter index of the guessed word 
        alphaBlocks[alphaIndex].parentNode.style.backgroundColor = 'grey'      
        if (listOfAllGuesses[startingRow][t] == correctWordArry[t]) {
            displayBoxes.childNodes[t + (startingRow * 5)].classList = 'box boxRightLocation'
            returnResult++;
            correctWordArry[t] = '';  // Remove this letter of the list of letters to check 
            alphaBlocks[alphaIndex].parentNode.style.backgroundColor = 'green'
        }
        else {
            displayBoxes.childNodes[t + (startingRow * 5)].classList = 'box boxUsedLocation'
            
        }
    } 
    /*
    By the time we get to the next for loop, all correctly placed letters have been removed from the checking array(correctWordArry)
    So they will not get checked a second time.
    */
    for (t = 0; t < 5; t++) {  // checking for letters correct but in the wrong spot.
        if (correctWordArry[t] != '') {
            if ((index =correctWordArry.indexOf(listOfAllGuesses[startingRow][t])) > -1) {
                correctWordArry[index] = '';  // remove index from the list of letters to check This ensures we dont mark too many letters
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
function noMoreGuesses(){
      /*
    Shows the modal form to advise of a incorrect guess
    */
   console.log("NO MORE GUESSES")
    modalWrapperElem = document.getElementById('myModal3');
    modalWrapperElem.style.display = 'block';
    document.getElementById('userInputBox').blur();
  
}

