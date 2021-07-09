class Player{
    constructor(name){
        this.name = name; //Players name
        this.choice;  //Players choice
        this.choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        this.score=0;
    }
    chooseGesture(){}
}

module.exports.Player = Player;