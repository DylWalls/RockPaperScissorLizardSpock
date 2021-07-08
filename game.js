//biggest code 
const {Player} = require("./Player");
const {Human} = require("./Human");
const {AI} = require("./AI")

class Game{
    constructor(name){
        this.name = name;
    }
    startApp(){ //start of the app method
        this.opening();
        this.computerChose();
    }

    opening(){ //User sees this on top of app
        console.log(`Lets start a game in ${this.name}! \nBest out of 3! GOOD LUCK!`)
        console.log("Rules of the game is Player one chooses a selection and AI is a random choice!");
    }

//method for gameRules 
//print outs for AI
    computerChose(){
        console.log(`Computer chose ${AI}`);
    }

}

module.exports.Game = Game;