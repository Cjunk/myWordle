function func() {           //  Filter the dictionary by the GREEN letters
    reset_results()         //  Clear the previous output
    green_letter_list = []  //  ******************************************** VARIABLES
    wordsfiltered = words.slice();  //  Only work on a copy of our word dictionary. Edits will go here
    const DEAD_WORD = "X"   //  Used to signify a filtered out word. 
    for (t = 1; t < 6; t++) {   //  Gather the details of the letters entered. 
        idstring = ("fname" + t.toString());
        green_letter_list[t] = document.getElementById(idstring).value;
        green_letter_list[t] = green_letter_list[t].toUpperCase();
    }
console.log(green_letter_list)
    for (t = 1; t < 6; t++) {
        if (green_letter_list[t] != "") {
            for (const word of wordsfiltered) {
                if (word != DEAD_WORD) {
                    if (green_letter_list[t] != word[t - 1]) {
                        ind = wordsfiltered.indexOf(word)
                        wordsfiltered[ind] = DEAD_WORD } } }
        }
    } 

    for (const word of wordsfiltered) { //  Present the results to the output pallete.
        results_division = document.getElementById("results_div")
        if (word != DEAD_WORD) {        //  Display all the remaining words. 
            let newelement = document.createElement('p');
            newelement.textContent = word
            newelement.id = "oktoremove"
            results_division.insertAdjacentElement('afterEnd', newelement)}}
}
function reset_results() {// Clears the output for another try           
    myNode = document.getElementById('oktoremove')
    while (myNode) {
        myNode.remove()
        myNode = document.getElementById('oktoremove') }
}
function clear_word(){
    reset_results();
    for (t = 1; t < 6; t++) {   //  Gather the details of the letters entered. 
        idstring = ("fname" + t.toString());
        document.getElementById(idstring).value ="";
    }
}


