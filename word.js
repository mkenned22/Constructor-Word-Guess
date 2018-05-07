var Letter = require("./letter");

var letters = [];

var Word = function(w){
    this.guessesRemaining = 10;
    this.value = w;
    this.letters = [];
    for(i=0;i<this.value.length;i++){
        var letter = new Letter(this.value.charAt(i));
        this.letters.push(letter);
    }
    
    this.showWord = function(){
        var display = "";
        for(i=0;i<this.letters.length;i++){
            display += this.letters[i].displayLetter();
        }
        return display;
    }
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

module.exports = Word;

var word = new Word("game");
console.log(word);
console.log(word.letters[0].displayLetter());
word.guess("a");
//letters[0].displayLetter();