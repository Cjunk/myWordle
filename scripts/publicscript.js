/*
  The user interface functions
  Written by Jericho Sharman

*/
function playGame() {
  document.getElementById('firstPopUp').style.visibility = 'hidden';
  document.getElementById('firstPopUp').remove();
  document.getElementById('mainPagewrapper').classList = 'mainPageVisible';
  document.getElementById('userInputBox').classList = 'userInputBoxVisible'
  __initBoard();
  //addGamesOne()  // testing add games won
}
function clickedLetter(e) {
  inputBox = document.getElementById('userInputBox')
  theLetter = e.querySelector('p').textContent
  inputBox.value = inputBox.value + theLetter
}
function enterBut() {
  result = __registerNewWord()
  if(result == 5){

  }
}
function resetGame(){
  /*
      this function will restart a new game.
      Clears all letters.
      resets all chosen letters
      */
      displayText = document.querySelectorAll('.boxLetter')
      displayBoxes = document.querySelector('#row')
      let alphaBlocks = document.querySelectorAll('.letterchoices')
      currentGuess = 0;
      for (each of displayBoxes.childNodes){
          each.classList = 'box unusedBox'
      }
      for (each of displayText) {
          each.textContent = ''
      }
      for (each of alphaBlocks){
          each.parentNode.style.backgroundColor = 'rgb(236, 231, 231)';
      }
      listOfAllGuesses = [] // Clear the previous guesses
      currentWord = __getRandomWord(validWords);  // get a new word

    }

/*
    The MODAL form for displaying Invalid Word
*/
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function invalidWordAlert(){
  
  /*
      Controls the popup for the Invalid word warning 
  */
  modalWrapperElem = document.getElementById('myModal');
  document.getElementById('userInputBox').blur();
  modalWrapperElem.style.display = 'block';
  
}
function youGuessedCorrectly(){
  /*
    Shows the modal form to advise of a correct guess
    */
}