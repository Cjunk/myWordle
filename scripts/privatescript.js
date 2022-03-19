
function __getRandomWord(theWordList) {
    // returns a random word from the dictionary
    return theWordList[Math.floor(Math.random() * theWordList.length)]
}
function __isWordAValidWord (guessedWord){
    /*
        Will return true or false if the word guess is in the dictionary or  not
    */
   if(validWords.indexOf(guessedWord.toUpperCase())> 0)
        return true;
    return false;
}
function __addABoxToTheGrid(){
    gridElem = document.getElementById('row');
    newBoxElem = document.createElement('div');
    newPElem = document.createElement('p');

    newPElem.classList = 'boxLetter';
    newBoxElem.classList="box";
    newBoxElem.appendChild(newPElem);
    gridElem.appendChild(newBoxElem);
}