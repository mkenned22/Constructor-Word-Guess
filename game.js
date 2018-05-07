var Word = require("./word");
var inquirer = require("inquirer")

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var lettersAlreadyGuessed = [];
var words = [];
words.push('rottweiler');

var game = function(w){
    this.word = new Word(w);
    this.isOver = false;
    this.promptUser = function(){
        var question = [
        {
            type: 'input',
            name: 'guess',
            message: "Please provide a letter",
            validate: function(value) {
            if ((alphabet.indexOf(value) > -1) && (lettersAlreadyGuessed.indexOf(value) === -1)) {
                return true;
            }
            return 'Please provide a letter you have not already guessed';
            }
        }
        ];
        
        inquirer.prompt(question).then(answers => {
            console.log('You have guessed: ' + answers.guess);
            lettersAlreadyGuessed.push(answers.guess);
            prev = this.word.showWord();
            this.word.guess(answers.guess);
            console.log("Incorrect Guesses Remaining: " + this.word.guessesRemaining);
            console.log(this.word.showWord());
            if((this.word.guessesRemaining < 1)||(this.word.showWord().indexOf("_") === -1)){
                console.log("Game Over! You Lose.");
                console.log("The correct word is: " + this.word.value);
                this.playAgain();
            }
            else{
                this.promptUser();
            }
        });
    }
    this.playAgain = function(){
        var question = [
        {
            type: 'confirm',
            name: 'playAgain',
            message: "Would you like to play again?",
        }
        ];
        
        inquirer.prompt(question).then(answers => {
            if(answers.playAgain === true){
                
            }
        });
    }
}









