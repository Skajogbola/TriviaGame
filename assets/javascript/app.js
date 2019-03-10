// 10 Questions and Answers
var questions = [
    {
        question: " How many colours are there in a rainbow?",
        answers: [
            {answer: "A. 6", value: false},
            {answer: "B. 7", value: true},
            {answer: "C. 8", value: false},
            {answer: "D. 5", value: false}
        ]
    },
    {
        question: " What do you call a time span of one thousand years? ",
        answers: [
            {answer: "A. Millennium", value: true},
            {answer: "B. Century", value: false},
            {answer: "C. Decade", value: false},
            {answer: "D. Eon", value: false}
        ]
    },
    {
        question: " How many squares are there on a chess board?",
        answers: [
            {answer: "A. 60", value: false},
            {answer: "B. 64", value: true},
            {answer: "C. 70", value: false},
            {answer: "D. 65", value: false}
        ]
    },
    {
        question: " Which is NOT one of the four types of teeth?",
        answers: [
            {answer: "A. Molars", value: false}, 
            {answer: "B. Incisors", value: false},
            {answer: "C. Canines", value: false},
            {answer: "D. Post-molars", value: true}
        ]
    },
    {
        question: " How many American cents make up a dime?",
        answers: [
            {answer: "A. 25", value: false},
            {answer: "B. 10", value: true},
            {answer: "C. 15", value: false},
            {answer: "D. 5", value: false}
        ]
    },
    {
        question: " What is the average temperature of the human body, in degrees centigrade?",
        answers: [
            {answer: "A. 35", value: false},
            {answer: "B. 37", value: true},
            {answer: "C. 40", value: false},
            {answer: "D. 30", value: false}
        ]
    },
    {
        question: " What is rum distilled from?",
        answers: [
            {answer: "A. Sugar cane", value: true},
            {answer: "B. Wheat", value: false},
            {answer: "C. Millet", value: false},
            {answer: "D. Rice", value: false}
        ]
    },
    {
        question: " Which common household item, usually found in a kitchen or utility room, did Hamilton Smith invent in 1858?",
        answers: [
            {answer: "A. Oven", value: false},
            {answer: "B. Dryer", value: false},
            {answer: "C. Washing machine", value: true},
            {answer: "D. Refrigerator", value: false}
        ]
    },
    {
        question: " How many symphonies did Beethoven compose?",
        answers: [
            {answer: "A. 6", value: false},
            {answer: "B. 9", value: true},
            {answer: "C. 8", value: false},
            {answer: "D. 5", value: false}
        ]
    },
    {
        question: " Which species of mollusc and a planet share a name?",
        answers: [
            {answer: "A. Pluto", value: false},
            {answer: "B. Venus", value: true},
            {answer: "C. Mars", value: false},
            {answer: "D. Mercury", value: false}
        ]
    }
    
]
//Creating the Global Variables
var game;
var clock;
var timer = 30;
var counter = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

$(document).ready(function(){
    
})