/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

'use strict'; 

class Phrase {
    constructor(phrase, hint) {
        this.phrase = phrase.toLowerCase();
        this.hint = hint;
    }
    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        this.phrase.split('').forEach(letter => {
            const li = document.createElement('li');
            li.innerHTML = letter;
            letter !== ' ' ? 
                li.className = `hide letter ${letter}`:
                li.className = 'space';
                phraseUL.appendChild(li);
        });
        const p = document.createElement('p');
        p.textContent = `Hint: ${this.hint}`;
        phraseUL.append(p);
    };
    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter) ? true : false;
    };
    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter) {
        const letters = document.querySelectorAll(`.hide.letter.${letter}`);    
        letters.forEach(matched => {
            matched.classList.remove('hide');
            matched.classList.add('show');
        });
    }
}