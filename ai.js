const { Player } = require("./player");

class AI extends Player{
    constructor(){
        this.choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    }
//random choice for AI
    chooseGesture(){
        let chooseGesture = this.choices[Math.floor(Math.random()*this.choices.length)];
       return chooseGesture;
    }
}

module.exports.AI = AI;
//AI code is finished!