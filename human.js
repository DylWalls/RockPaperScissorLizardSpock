const prompt = require('prompt-sync')();
const { Player } = require("./Player");

class Human extends Player{
    constructor(stringName, stringChoice){
        super(stringName, stringChoice);
    }
    

    humanChoice(){ //choosing a gesture using this.choice=prompt()
        choice1 = prompt();
    }
}
module.exports.Human = Human;