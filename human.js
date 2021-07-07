class Human{
    constructor(stringName, stringChoice){
        this.name = stringName; //Players name
        this.choice = stringChoice; // Players choice
    }
   
    humanChoice(){
        console.log(`${this.name} chose ${this.choice}!`)
        //expected log: Dylan chose rock!
    }
    
}

module.exports.Human = Human;