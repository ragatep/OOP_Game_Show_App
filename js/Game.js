/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Student: Ryan Agatep
 * Game.js 
 */

'use strict'; 

class Game {
    constructor() { 
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases and their hints that could be used in the game
     */
    createPhrases() {
        const phrases = [
            new Phrase(`FINGERS AND TOES`, `Things`),
            new Phrase(`PASSING THE BATON`, `What are you doing?`),
            new Phrase(`I WALK ALONE`, `Song Lyrics`),
            new Phrase(`THE PAINTED DESERT`, `Landmark`),
            new Phrase(`EXCLUSIVE NIGHTCLUBS`, `Place`)
        ];
        return phrases;
    }
    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };
    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        let randomNumber = Math.floor(Math.random() * this.phrases.length);
        let randomPhraseObject = this.phrases[randomNumber];
        return randomPhraseObject;
    };
    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     * Disables the clicked keyboard button
     * Calls showMatchedLetter() when random phrase includes guessed letter
     * Calls removeLife() when random phrase doesn't includes guessed letter
     */
    handleInteraction(button) {
        button.disabled = true;
        const guessedLetter = button.textContent;
        if(this.activePhrase.checkLetter(guessedLetter)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(guessedLetter);
            if(this.checkForWin()){
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    };
    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't
       won
     */
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide'); 
        return hiddenLetters.length === 0 ? true : false;
    };
    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() { 
        this.missed +=1;
        const attempts = document.querySelectorAll('img[src="images/liveHeart.png"]');
        let remainingAttempts = attempts.length -1;
        //console.log(`You have ${remainingAttempts} attempts left`);
        attempts[remainingAttempts].setAttribute('src', 'images/lostHeart.png');

        0 === remainingAttempts&&this.gameOver();
    };
    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        const gameOverMessage = document.getElementById('game-over-message');
        overlay.style.display = 'inherit';

        gameWon ?
            (gameOverMessage.textContent="You won!",
                overlay.classList.remove('start','lose'), overlay.classList.add("win")):
            (gameOverMessage.textContent="Sorry, better luck next time!",
                overlay.classList.remove('start','win'), overlay.classList.add("lose"));
    };
}