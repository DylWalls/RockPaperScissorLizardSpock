//biggest code 
const {Player} = require("./Player");
const {Human} = require("./Human");
const {AI} = require("./AI")

class Game{
    constructor(name){
        this.name = name;
        this.playerOne;
        this.playerTwo;
    }
    startApp(){ //start of the app method
        this.opening();
        // this.startComputer();
        this.startHuman();
        this.gameRules();
    }

    opening(){ //User sees this on start of app
        console.log(`Lets start a game of RPSLS in ${this.name}! \nBest out of 3! GOOD LUCK!`)
    }

//method for gameRules 
    gameRules(){
        this.playerOne.humanChoice();
        console.log(`${this.playerOne.name} chose ${this.playerOne.choice}!`);
        this.playerTwo.humanChoice();
        console.log(`${this.playerTwo.name} chose ${this.playerTwo.humanChoice}!`);
        console.log("Lets see who wins!!")
        do{
            console.log(`${this.playerOne.name} score:${this.playerOne.score}`);
            console.log(`${this.playerTwo.name} score:${this.playerTwo.score}`);
        if(this.playerOne.choice === "Rock" && (this.playerTwo.choice=== "Lizard" || this.playerTwo.choice=== "Scissors")){ //playerOne chose Rock. Arguments within to decide
            console.log(`${this.playerOne.name} won this round!`);
            this.playerOne.score++;
        }
        else if(this.playerTwo.choice === "Rock" && (this.playerOne.choice=== "Lizard" || this.playerOne.choice=== "Scissors")){ //playerTwo chose Rock. Arguments within to decide
            console.log(`${this.playerTwo.name} won this round!`);
            this.playerTwo.score++;
        }
        else if(this.playerOne.choice === "Paper" && (this.playerTwo.choice=== "Spock"|| this.playerTwo.choice=== "Rock")){ //playerOne chose Paper. Arguments within to decide
            console.log(`${this.playerOne.name} won this round!`);
            this.playerOne.score++;
        }
        else if(this.playerOne.choice === "Paper" && (this.playerTwo.choice=== "Spock" || this.playerTwo.choice=== "Rock")){ //playerTwo chose Paper. Arguments within to decide
            console.log(`${this.playerTwo.name} won this round!`);
            this.playerTwo.score++;
        }
        else if(this.playerOne.choice === "Scissor" && (this.playerTwo.choice=== "Paper" || this.playerTwo.choice=== "Rock")){ //playerOne chose Scissor. Arguments within to decide
            console.log(`${this.playerOne.name} won this round!`);
            this.playerOne.score++;
        }
        else if(this.playerTwo.choice === "Scissor" && (this.playerOne.choice=== "Paper" || this.playerOne.choice=== "Rock")){ //playerTwo chose Scissor. Arguments within to decide
            console.log(`${this.playerTwo.name} won this round!`);
            this.playerTwo.score++;
        }
        else if(this.playerOne.choice === "Lizard" && (this.playerTwo.choice=== "Spock" || this.playerTwo.choice=== "Paper")){ //playerOne chose Lizard. Arguments within to decide
                console.log(`${this.playerOne.name} won this round!`);
                this.playerOne.score++;
        }
        else if(this.playerTwo.choice === "Lizard" && (this.playerOne.choice=== "Spock" || this.playerOne.choice=== "Paper")){ //playerTwo chose Lizard. Arguments within to decide
                console.log(`${this.playerTwo.name} won this round!`);
                this.playerTwo.score++;
        }
        else if(this.playerOne.choice === "Spock" && (this.playerTwo.choice=== "Scissor" || this.playerTwo.choice=== "Rock")){ //playerOne chose Spock. Arguments within to decide
            console.log(`${this.playerOne.name} won this round!`);
            this.playerOne.score++;
        }
        else if(this.playerOne.choice === "Spock" && (this.playerTwo.choice=== "Scissor" || this.playerTwo.choice=== "Rock")){ //playerTwo chose Spock. Arguments within to decide
            console.log(`${this.playerTwo.name} won this round!`);
            this.playerTwo.score++;
        }
    }while(this.playerOne.score <= 3 && this.playerTwo.score <= 3);
}

//print outs for AI
    startComputer(){
        this.playerOne = new AI();
        this.playerTwo = new AI(); 
    }
    startHuman(){
        this.playerOne = new Human();
        this.playerTwo = new Human();
    }

}

module.exports.Game = Game;