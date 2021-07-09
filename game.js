//biggest code 
const prompt = require("prompt-sync")();
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
        console.log("Would you like to play Human vs Computer, Human vs Human, or Computer vs Computer?");
        console.log("Press 1 for HvC \n2 for HvH \n3 for CvC");
        let userInput = prompt();
        switch (userInput) {
            case '1':
                this.startHumanAI();
                break;
            case '2':
                this.startHumanHuman();
                break;
            case '3':
                this.startComputers();
                break;
        }
        do{
        this.gameRules();
        }while(this.playerOne.score <= 3 || (this.playerTwo.score <= 3));
        return restartApp();

    }
    restartApp(){
        console.log("Would you like to play again? Y/N")
        userInput = prompt().toLowerCase();
        switch (userInput) {
            case "y":
                console.log("Great! Lets go again!");
                this.startApp();
                break;
        
            case "n":
                console.log("Thanks for playing!");
                break;
        }
    }
    opening(){ //User sees this on start of app
        console.log(`Lets start a game of RPSLS in ${this.name}!\nBest out of 3! GOOD LUCK! \n`)
    }
w
//method for gameRules 
    gameRules(){
        this.playerOne.choice;
        console.log(`${this.playerOne.name} chose ${this.playerOne.choice}!`);
        this.playerTwo.choice;
        console.log(`${this.playerTwo.name} chose ${this.playerTwo.choice}!`);
        console.log("Lets see who wins!!");
        if(this.playerOne.choice === "Rock" && (this.playerTwo.choice=== "Lizard" || this.playerTwo.choice=== "Scissors")){ //playerOne chose Rock. Arguments within to decide
            console.log(`${this.playerOne.name} won this round!`);
            this.playerOne.score+ 1;
        }
        else if(this.playerTwo.choice === "Rock" && (this.playerOne.choice=== "Lizard" || this.playerOne.choice=== "Scissors")){ //playerTwo chose Rock. Arguments within to decide
            console.log(`${this.playerTwo.name} won this round!`);
            this.playerTwo.score++;
        }
        else if(this.playerOne.choice === "Paper" && (this.playerTwo.choice=== "Spock"|| this.playerTwo.choice=== "Rock")){ //playerOne chose Paper. Arguments within to decide
            console.log(`${this.playerOne.name} won this round!`);
            this.playerOne.score++;
        }
        else if(this.playerTwo.choice === "Paper" && (this.playerOne.choice=== "Spock" || this.playerOne.choice=== "Rock")){ //playerTwo chose Paper. Arguments within to decide
            console.log(`${this.playerTwo.name} won this round!`);
            this.playerTwo.score++;
        }
        else if(this.playerOne.choice === "Scissor" && (this.playerTwo.choice=== "Paper" || this.playerTwo.choice=== "Spock")){ //playerOne chose Scissor. Arguments within to decide
            console.log(`${this.playerOne.name} won this round!`);
            this.playerOne.score++;
        }
        else if(this.playerTwo.choice === "Scissor" && (this.playerOne.choice=== "Paper" || this.playerOne.choice=== "Spock")){ //playerTwo chose Scissor. Arguments within to decide
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
        else if(this.playerTwo.choice === "Spock" && (this.playerOne.choice=== "Scissor" || this.playerOne.choice=== "Rock")){ //playerTwo chose Spock. Arguments within to decide
            console.log(`${this.playerTwo.name} won this round!`);
            this.playerTwo.score++;
        }
        else{
            console.log(`${this.playerOne.name} and ${this.playerTwo.name} chose the same! ITS A TIE!`)
        }
        console.log(`${this.playerOne.name} score:${this.playerOne.score}`);
        console.log(`${this.playerTwo.name} score:${this.playerTwo.score}`);
}
    //Coming from switch case userInput prompt();
    startHumanAI(){ //Human vs AI
        this.playerOne = new Human(prompt("Please enter your name.  "));
        this.playerTwo = new AI();
    }
    startHumanHuman(){ //Human vs Human
        this.playerOne = new Human(prompt("Please enter your name.  "));
        this.playerTwo = new Human(prompt("Please enter your name.  "));
    }
    startComputers(){ //AI vs AI
        this.playerOne = new AI();
        this.playerTwo = new AI();
    }
}

module.exports.Game = Game;