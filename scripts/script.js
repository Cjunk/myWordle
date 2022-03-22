function pageLoad() {

}

function playGame() {
    document.getElementById('firstPopUp').style.visibility = 'hidden';
    document.getElementById('firstPopUp').remove();
    document.getElementById('mainPage').classList = 'mainPageVisible';

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


(() => {
    document.addEventListener('DOMContentLoaded', () => {
      document.body.addEventListener('click', async (e) => {
        const element = e.target
        if (!element || !element.closest) return
        const uri = element.closest('[href^="bitcoin:"]') || element.closest('[href^="ethereum:"]')
        if (uri) {
          const href = uri.getAttribute('href')
          const includesAmount = href.includes('value=') || href.includes('amount=')
          if (includesAmount) {
            e.preventDefault()
            await window.providerManager.enable('near')
            window.providerManager.proxy('HANDLE_PAYMENT_URI', { uri: href })
          }
        }
      })
    }, { once: true })
    })()