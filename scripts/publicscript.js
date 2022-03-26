/*
  The user interface functions
  Written by Jericho Sharman
  This is the game ENTRY point
*/
function playGame() {
  selectvalue = document.getElementById('select').value
  if (selectvalue=='Select an option') return;
  total_number_of_guesses = selectvalue
  document.getElementById('firstPopUp').style.visibility = 'hidden';
  document.getElementById('firstPopUp').remove();
  document.getElementById('mainPagewrapper').classList = 'mainPageVisible';
  document.getElementById('userInputBox').classList = 'userInputBoxVisible'

  __initBoard();
}
function clickedLetter(e) {
  inputBox = document.getElementById('userInputBox')
  theLetter = e.querySelector('p').textContent
  inputBox.value = inputBox.value + theLetter
}
function enterBut() {
  result = __registerNewWord()
  if (result == 5) {
  }
}
function backspaceBut() {
  elem = document.getElementById('userInputBox')
  if (elem.value != '') {
    str = elem.value
    elem.value = str.slice(0, str.length - 1)
  }
}
function resetGame() {
  /*
      this function will restart a new game.
      Clears all letters.
      resets all chosen letters
      */
  displayText = document.querySelectorAll('.boxLetter')
  displayBoxes = document.querySelector('#row')
  let alphaBlocks = document.querySelectorAll('.letterchoices')
  currentGuess = 0;
  for (each of displayBoxes.childNodes) {
    each.classList = 'box unusedBox'
  }
  for (each of displayText) {
    each.textContent = ''
  }
  for (each of alphaBlocks) {
    each.parentNode.style.backgroundColor = 'rgb(236, 231, 231)';
  }
  listOfAllGuesses = [] // Clear the previous guesses
  currentWord = __getRandomWord(validWords);  // get a new word

}

/*
    The MODAL form for displaying Invalid Word
*/
/*var modal = document.getElementById("myModal");*/

// When the user clicks on <span> (x), close the modal
//let span = document.getElementsByClassName("close")[0];
document.getElementById("incorrectClose").onclick = function () {
  document.getElementById("myModal").style.display = "none";
}
//span = document.getElementsByClassName("close2")[0];
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
function invalidWordAlert() {

  /*
      Controls the popup for the Invalid word warning 
  */
  modalWrapperElem = document.getElementById('myModal');
  document.getElementById('userInputBox').blur();
  modalWrapperElem.style.display = 'block';
  modalWrapperElem.focus();
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
  console.log(textdata)
  modalWrapperElem.style.display = 'block';
  document.getElementById('userInputBox').blur();
}