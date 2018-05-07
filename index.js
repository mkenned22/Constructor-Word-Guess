//require the Word constructor, and the inquirer NPM package
var Word = require("./word");
var inquirer = require("inquirer")

//initialize the alphabet for validation
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// initialize array for letters 
var lettersAlreadyGuessed = [];

//words array
var words = [];
words.push('rottweiler');

//create the game
var game = new Word(words[0]);
game.isOver = false;
game.promptUser = function(){
    var questions = [
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
      
      inquirer.prompt(questions).then(answers => {
        console.log('You have guessed: ' + answers.guess);
        lettersAlreadyGuessed.push(answers.guess);
        prev = game.showWord();
        game.guess(answers.guess);
        console.log("Incorrect Guesses Remaining: " + game.guessesRemaining);
        console.log(game.showWord());
        if(game.guessesRemaining > 0){
            game.promptUser();
        }
        else{
            console.log("GAME OVER, YOU LOSE");
            console.log("The correct word is: " + game.value);
            var questions = [
                {
                  type: 'confirm',
                  name: 'playAgain',
                  message: "Would you like to play again?",
                  
                }
              ];
              
              inquirer.prompt(questions).then(answers => {
                if(answers.playAgain === true){
                    game = new Word("magic");
                    game.promptUser();
                }
                    // console.log(answers.playAgain);
                    
                //console.log(JSON.stringify(answers, null, '  '));
              });
        }
        //console.log(JSON.stringify(answers, null, '  '));
      });
}



console.log("Constructor Word Guess");
console.log("Incorrect Guesses Remaining: " + game.guessesRemaining);
console.log(game.showWord());
game.promptUser();









