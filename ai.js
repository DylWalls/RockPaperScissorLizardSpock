const { Player } = require("./Player");

class AI extends Player{
    constructor(){
        super("Bob");
    }
//random choice for AI
    chooseGesture(){
        this.choice = this.choices[Math.floor(Math.random()*this.choices.length)];      
    }
}

module.exports.AI = AI;
//AI code is finished!