const prompt = require('prompt-sync')();
const { Player } = require("./Player");

class Human extends Player{
    constructor(stringName, stringChoice){
        super(stringName, stringChoice);
    }
    

    humanChoice(){ //choosing a gesture using this.choice=prompt()
        console.log("1 Rock 2 Paper 3 Scissors 4 Lizard 5 Spock")
        let userInput = prompt();
        switch (userInput) {
            case "1":
                this.choice = this.choices[0];    
                break;      
            case "2":
                this.choice = this.choices[1];    
                break;
            case "3":
                this.choice = this.choices[2];    
                break;
            case "4":
                this.choice = this.choices[3];    
                break;
            case "5":
                this.choice = this.choices[4];    
                break;    
        }
    }
}
module.exports.Human = Human;