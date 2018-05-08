//require the Word constructor, and the inquirer NPM package
var Word = require("./word");
var inquirer = require("inquirer");

//initialize the alphabet for validation
alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// initialize array for letters 
lettersAlreadyGuessed = [];

//words array
var words = ['beagle','rottweiler','bulldog','poodle','doberman','chihuahua','boxer'];

//create the function to prompt the user until the game is over
var promptUser = function(game,lettersAlreadyGuessed){
    //question to be asked to the player
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
    //prompt the user and then run logic on the user's guess
    inquirer.prompt(questions).then(answers => {
        console.log('You have guessed: ' + answers.guess);
        lettersAlreadyGuessed.push(answers.guess); //push the guess to the letters already guessed array
        game.guess(answers.guess); //execute the guess method
        console.log("Incorrect Guesses Remaining: " + game.guessesRemaining);
        console.log(game.showWord()); // show the word with "_" replacing letters not yet guessed
        //if the word does not contain any "_", then the word is complete
        if(game.showWord().indexOf("_") === -1){
            console.log("GAME OVER, YOU WIN!");
            playAgain();
        }
        else if(game.guessesRemaining > 0){
            promptUser(game,lettersAlreadyGuessed);
        }
        else{
            console.log("GAME OVER, YOU LOSE");
            console.log("The correct word is: " + game.value);
            playAgain();
        }
    });
}

var playAgain = function(){
    var questions = [
        {
            type: 'confirm',
            name: 'playAgain',
            message: "Would you like to play again?",
        }
    ];
    inquirer.prompt(questions).then(answers => {
        if(answers.playAgain === true){
            var lettersAlreadyGuessed = [];
            var index  = Math.floor(Math.random() * words.length);
            var randomWord  = words[index]; 
            game = new Word(randomWord);
            console.log(game.showWord());
            promptUser(game,lettersAlreadyGuessed);
        }
    });
}

var index  = Math.floor(Math.random() * words.length);
var randomWord  = words[index]; 

var game = new Word(randomWord);
console.log("Constructor Word Guess");
console.log("Hint: Dog Breeds");
console.log("Incorrect Guesses Remaining: " + game.guessesRemaining);
console.log(game.showWord());
promptUser(game,lettersAlreadyGuessed);









