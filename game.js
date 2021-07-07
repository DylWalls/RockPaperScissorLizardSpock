const {Player} = require("./player");

class Game{
    constructor(name){
        this.name = name;
    }
    startApp(){ //start of the app method
        this.opening();
    }

    opening(){ //User sees this on top of app
        console.log(`Lets start a game at ${this.name}!`)
    }

}

module.exports.Game = Game;