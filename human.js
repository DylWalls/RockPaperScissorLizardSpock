const { Player } = require("./player");

class Human extends Player{
    constructor(stringName, stringChoice){
        super(stringName, stringChoice);
    }
    humanChoice(){ //choosing a gesture using this.choice=prompt()
        console.log(`${this.name} chose ${this.choice}!`)
        //expected log: Dylan chose rock!
    }

}

module.exports.Human = Human;