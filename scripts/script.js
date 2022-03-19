function pageLoad() {

}

function playGame() {
    document.getElementById('firstPopUp').style.visibility='hidden';
    document.getElementById('firstPopUp').remove();
    document.getElementById('mainPage').classList='mainPageVisible';
    console.log(__isWordAValidWord('ABORT'));  

    initBoard();
}

function initBoard(){
    /* Initialise the game 
        Options are already chosen at this point.
        Grabs a current word and refresehes the board.
    */
        let currentWord = __getRandomWord(validWords);
        for(row=0;row<total_number_of_guesses;row++)
            addFullRow();
}
function addFullRow() {
    for(item=0;item<5;item++){
        __addABoxToTheGrid()
    }
}

