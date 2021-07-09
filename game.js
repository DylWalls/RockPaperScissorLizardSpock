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
        console.log(`Lets start a game in ${this.name}! \nBest out of 3! GOOD LUCK!`)
        console.log("Rules of the game is Player one chooses a selection and AI is a random choice!");
    }

//method for gameRules 
    gameRules(){
        this.playerOne.humanChoice();
        console.log(this.playerOne.choice);
        this.playerTwo.humanChoice();
        console.log(this.playerTwo.choice);
        if(this.playerOne.choice === [0] && (this.playerTwo.choice===[4] || this.playerTwo.choice===[3])){ //playerOne chose Rock. Arguments within to decide
            console.log(`${this.playerOne.name} won this round!`);
        }
        else if(this.playerTwo.choice === [0] && (this.playerOne.choice===[4] || this.playerOne.choice===[3])){ //playerTwo chose Rock. Arguments within to decide
            console.log(`${this.playerTwo.name} won this round!`);
        }
        else if(this.playerOne.choice === [1] && (this.playerTwo.choice===[4] || this.playerTwo.choice===[0])){ //playerOne chose Paper. Arguments within to decide
            console.log(`${this.playerOne.name} won this round!`);
        }
        else if(this.playerOne.choice === [1] && (this.playerTwo.choice===[4] || this.playerTwo.choice===[0])){ //playerTwo chose Paper. Arguments within to decide
            console.log(`${this.playerTwo.name} won this round!`);
        }
        else if(this.playerOne.choice === [2] && (this.playerTwo.choice===[1] || this.playerTwo.choice===[4])){ //playerOne chose Scissor. Arguments within to decide
            console.log(`${this.playerOne.name} won this round!`);
        }
        else if(this.playerTwo.choice === [2] && (this.playerOne.choice===[1] || this.playerOne.choice===[4])){ //playerTwo chose Scissor. Arguments within to decide
            console.log(`${this.playerTwo.name} won this round!`);
        }
        else if(this.playerOne.choice === [3] && (this.playerTwo.choice===[4] || this.playerTwo.choice===[1])){ //playerOne chose Lizard. Arguments within to decide
                console.log(`${this.playerOne.name} won this round!`);
        }
        else if(this.playerTwo.choice === [3] && (this.playerOne.choice===[4] || this.playerOne.choice===[1])){ //playerTwo chose Lizard. Arguments within to decide
                console.log(`${this.playerTwo.name} won this round!`);
        }
        if(this.playerOne.choice === [4] && (this.playerTwo.choice===[2] || this.playerTwo.choice===[0])){ //playerOne chose Spock. Arguments within to decide
            console.log(`${this.playerOne.name} won this round!`);
        }
        else if(this.playerOne.choice === [4] && (this.playerTwo.choice===[2] || this.playerTwo.choice===[0])){ //playerTwo chose Spock. Arguments within to decide
            console.log(`${this.playerTwo.name} won this round!`);
        }
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