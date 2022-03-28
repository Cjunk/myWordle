/*
  The user interface functions
  Written by Jericho Sharman
  This is the game ENTRY point
*/

/*************************************************************************************************************************************/
function playGame() {
  /*
  This is the entry function. Executed from the 'Play me' button from the instructions screen
  */
  if (document.getElementById('select').value == 'Select an option') return;
  total_number_of_guesses = document.getElementById('select').value;
  document.getElementById('firstPopUp').style.visibility = 'hidden';
  document.getElementById('firstPopUp').remove();
  document.getElementById('mainPagewrapper').classList = 'mainPageVisible';
  document.getElementById('userInputBox').classList = 'userInputBoxVisible';
  __initBoard();
}
function clickedLetter(e) {
  /* Executes when the user clicks on one of the alpha keys */
  displayText = document.querySelectorAll('.boxLetter')
  if (currentLetterPos < 5) {
    inputBox.value = inputBox.value + e.querySelector('p').textContent;
    startingRow = listOfAllGuesses.length;
    displayText[startingRow * 5 + currentLetterPos].textContent = e.childNodes[1].innerText
    currentLetterPos++;
  }
}
function enterBut() {
  /* This function is called when the user either presses the enter key on the keyboard or via the mouse on the screen */
  currentLetterPos = 0;
  result = __registerNewWord();
}
function backspaceBut(e) {
  console.log(e)
  /* The backspace key on the screen executed via the mouse */
  displayText = document.querySelectorAll('.boxLetter')
  if (inputBox.value != '') {
    inputBox.value = inputBox.value.slice(0, inputBox.value.length - 1)
    if (currentLetterPos > 0) {
      startingRow = listOfAllGuesses.length;
      currentLetterPos--;
      displayText[startingRow * 5 + currentLetterPos].textContent = '';
    }
  }
}
function resetGame() {
  /*
      this function will restart a new game.
      Clears all letters.
      resets all chosen letters
      */
  currentGuess = 0;
  listOfAllGuesses = [] // Clear the previous guesses
  currentWord = __getRandomWord(validWords);  // get a new word 

  saveProgress()
  for (each of displayBoxes.childNodes) {
    each.classList = 'box unusedBox'
  }
  for (each of displayText) {
    each.textContent = ''
  }
  for (each of alphaBlocks) {
    each.parentNode.style.backgroundColor = 'rgb(236, 231, 231)';
  }

}
/*
    The MODAL form for displaying Invalid Word
*/
// When the user clicks on <span> (x), close the modal
//let span = document.getElementsByClassName("close")[0];
document.getElementById("incorrectClose").onclick = function () {
  document.getElementById("myModal").style.display = "none";
}
document.getElementById("correctClose").onclick = function () {
  resetGame()
  document.getElementById("myModal2").style.display = "none";
}
document.getElementById("noMorGuesesClose").onclick = function () {
  resetGame()
  document.getElementById("myModal3").style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
  if (event.target == document.getElementById("myModal2")) {

    document.getElementById("myModal2").style.display = "none";
    resetGame()
  }
  if (event.target == document.getElementById("myModal3")) {
    document.getElementById("myModal2").style.display = "none";
    resetGame()
  }
}

function youGuessedCorrectly() {
  /*
    Shows the modal form to advise of a correct guess
    */
  modalWrapperElem = document.getElementById('myModal2');
  document.getElementById('userInputBox').blur();
  modalWrapperElem.style.display = 'block';
}
function noMoreGuesses() {
  /*
    Shows the modal form to advise of a incorrect guess
*/

  modalWrapperElem = document.getElementById('myModal3');
  textdata = document.getElementById('noMoreGuessText')
  textdata.innerHTML = textdata.innerHTML + currentWord
  modalWrapperElem.style.display = 'block';
  document.getElementById('userInputBox').blur();
}
function resetStats() {
  gamesWon = 0
  winningStreak = 0
  saveALlStats()
  updateStatsDisplay()
}
