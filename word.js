//require Letter constructor
var Letter = require("./letter");

//initialize letters array for the word
var letters = [];

//create Word constructor
var Word = function(w){
    this.value = w;
    this.guessesRemaining = 10; //used to determine if the game is over or is the user should be prompted to guess again
    this.letters = [];
    //loop through the word and create individual letters using the Letter constructor
    for(i=0;i<this.value.length;i++){
        var letter = new Letter(this.value.charAt(i));
        this.letters.push(letter);
    }
    //create method to show the word, which loops through the letter objects and calls the displayLetter method
    this.showWord = function(){
        var display = "";
        for(i=0;i<this.letters.length;i++){
            display += this.letters[i].displayLetter();
        }
        return display;
    }
    //create guess method to allow the user to enter a guess, and check each letter in the word
    this.guess = function(char){
        var before = this.showWord();
        for(i=0;i<this.letters.length;i++){
            this.letters[i].checkCharacter(char);
        }
        var after = this.showWord();
        if(before === after){
            this.guessesRemaining--;
        }
    }
}
//export Word constructure
module.exports = Word;