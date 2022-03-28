/*
    This file contains all the constants used for the game .
*/
//DEBUGGING_CONSTANTS
MASTER_DEBUG = false;
DEBUG_Random = false;
DEBUG_RANDOM_WORD = false;
DEBUG_WORD = 'LEASE'  // test words : CHAPS/SPACE/PSALM
//DEBUG_WORD = 'SAIMS'  // test words : SPICE

let DEBUG = false;
let currentGuessNo = 0;
let currentWord = ''
let total_number_of_guesses = 6;
let listOfAllGuesses = []

let gamesWon = 0
let winningStreak = 0

const WINNING_STREAK_VAR = 'STREAK'
const TOTAL_GAMES_WON_VAR = 'GAMES'
const LIST_OFF_ALL_GUESSES_VAR = 'listOfAllGuesses'
const CURRENT_GUESS_NO_VAR = 'currentGuess'
const MAX_NUMBER_OF_GUESSES_VAR = 'total_number_of_guesses'
const CURRENT_WORD_VAR = 'currentWord'

const ELEM_BACKGROUNDCOLOR_CORRECT = 'green'
const ELEM_BACKGROUNDCOLOR_UNUSED = 'grey'
const ELEM_BACKGROUNDCOLOR_NEARLYCORRECT = 'orange'
