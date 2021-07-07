const {Human} = require("./human"); // Imported Human 
const {Ai} =require("./ai"); //Imported AI

class Player{
    constructor(){


    }
    winChoises = { //method of winning choices
        'Rock':{
            'scissors' : 'crushes',
            'lizard' : 'crushes'
        },
        'Paper':{
            'Spock' : 'diproves',
            'Rock' : 'covers'
        },
        'Scissors':{
            'paper' : 'cuts',
            'lizard' : 'eats'
        },
        'Lizard':{
            'spock' : 'crushes',
            'paper' : 'crushes'
        },
        'Spock':{
            'scissors' : 'smashes',
            'rock' : 'vaporizes'
        }
    }
    


}