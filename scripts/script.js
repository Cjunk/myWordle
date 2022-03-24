/*
  The user interface functions
  Written by Jericho Sharman

*/

function pageLoad() {

}

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
  __registerNewWord()
}
function resetGame(){
  /*
      this function will restart a new game.
      Clears all letters.
      resets all chosen letters
      */
      window.confirm("text")
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