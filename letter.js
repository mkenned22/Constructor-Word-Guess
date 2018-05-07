var Letter = function(l){
    this.value = l;
    this.guessedCorrectly = false;
    this.checkCharacter = function(guess){
        if(this.value === guess){
            this.guessedCorrectly = true;
            //this.displayLetter();
        }
        return this.guessedCorrectly;
    }
    this.displayLetter = function(){
        if(this.guessedCorrectly === true){
            return this.value + " ";
        }
        else{
            return '_ ';
        }
    };
}

module.exports = Letter;

var letter = new Letter("i");
// console.log(letter);
console.log(letter.checkCharacter("o"));
//console.log(letter.displayLetter());
