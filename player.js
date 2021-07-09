class Player{
    constructor(name){
        this.name = name; //Players name
        this.choice; 
        this.choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        this.score=0;
    }
}

module.exports.Player = Player;