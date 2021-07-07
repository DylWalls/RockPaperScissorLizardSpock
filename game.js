//biggest code 
const {Player} = require("./player");
const {Human} = require("./human");
const {AI} = require("./ai")

class Game{
    constructor(name){
        this.name = name;
    }
    startApp(){ //start of the app method
        this.opening();
        
    }

    opening(){ //User sees this on top of app
        console.log(`Lets start a game in ${this.name}! \nBest out of 3! GOOD LUCK!`)
    }

//method for gameRules    

}

module.exports.Game = Game;