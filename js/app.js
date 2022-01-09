/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Student: Ryan Agatep
 * app.js 
 */

'use strict'; 

// Variables
const phraseUL = document.querySelector('#phrase').firstElementChild;
const osKeyboardKeys = document.querySelectorAll('.key');
const imageHearts = document.querySelectorAll('img');
const startButton = document.getElementById('btn__reset')

let game;

// Listens for click on 'btn__reset'
startButton.addEventListener('click', () => {
    /** 
     * Resets the gameboard and creates a new game
     */
    phraseUL.innerHTML = '';
    osKeyboardKeys.forEach(key => {
        key.classList.remove('chosen', 'wrong');
        key.disabled = false;
    })
    imageHearts.forEach(heart => {
        heart.setAttribute('src', 'images/liveHeart.png');
    })
    game = new Game();
    game.startGame();
})
// Listens for click on keyboard buttons
osKeyboardKeys.forEach(key => {
    key.addEventListener('click', (e) => {
        game.handleInteraction(e.target) 
    })
})