//Letter constructor
var Letter = function(l){
    this.value = l;
    this.guessedCorrectly = false;
    //method that checks to see if the value provided matches the letter
    this.checkCharacter = function(guess){
        if(this.value === guess){
            this.guessedCorrectly = true;
        }
        return this.guessedCorrectly;
    }
    //method that displays the letter in the console
    this.displayLetter = function(){
        if(this.guessedCorrectly === true){
            return this.value + " ";
        }
        else{
            return '_ ';
        }
    };
}
//export the Letter constructor
module.exports = Letter;