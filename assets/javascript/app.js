$(document).ready(function () {
    // 10 Questions and Answers
    var triviaQuestions = [
        {
            question: " How many colours are there in a rainbow?",
            answers: ["6", "7", "8", "5"],
            correctAnswer: 1
        },
        {
            question: " What do you call a time span of one thousand years? ",
            answers: ["Millennium", "Century", "Decade", "Eon"],
            correctAnswer: 0,
        },
        {
            question: " How many squares are there on a chess board?",
            answers: ["60", "64", "70", "65"],
            correctAnswer: 1,
        },
        {
            question: " Which is NOT one of the four types of teeth?",
            answers: ["Molars", "Incisors", "Canines", "Post-molars"],
            correctAnswer: 3,
        },
        {
            question: " How many American cents make up a dime?",
            answers: ["25", "10", "15", "5"],
            correctAnswer: 1
        },
        {
            question: " What is the average temperature of the human body, in degrees centigrade?",
            answers: ["35", "37", "40", "30"],
            correctAnswer: 1
        },
        {
            question: " What is rum distilled from?",
            answers: ["Sugar cane", "Wheat", "Millet", "Rice"],
            correctAnswer: 0
        },
        {
            question: " Which common household item, usually found in a kitchen or utility room, did Hamilton Smith invent in 1858?",
            answers: ["Oven", "Dryer", "Washing machine", "Refrigerator"],
            correctAnswer: 2
        },
        {
            question: " How many symphonies did Beethoven compose?",
            answers: ["6", "9", "8", "5"],
            correctAnswer: 1
        },
        {
            question: " Which species of mollusc and a planet share a name?",
            answers: ["Pluto", "Venus", "Mars", "Mercury"],
            correctAnswer: 1
        }

    ]
    //Creating the Global Variables
    var pick;
    var index;
    var timer = 30;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    var queCount = triviaQuestions.length;
    var running = false;
    var newArray = [];
    var holder = [];
    var userGuess = "";
    var intervalId;

    $("#startOverBtn").hide();

    //--------------Creating functions----------------------
    // function startGame(){
    //     console.log(startGame);
    //     $(".button").remove();
    //     correctAnswers = 0;
    //     incorrectAnswers = 0;
    //     unanswered = 0;
    //     loadQuestions();
    // }
    //sets up new questions & answerList.
    //display question and loop though and display possible answers
    function loadQuestions() {
        //generate random index in array
        index = Math.floor(Math.random() * triviaQuestions.length);
        pick = triviaQuestions[index];
        $("#currentQuestion").html("<h2>" + pick.question + "</h2>");
        for (var i = 0; i < pick.answers.length; i++) {
            var userChoice = $("<div>");
            userChoice.addClass("answerchoice");
            userChoice.html(pick.answers[i]);
            //assign array position to it so can check answer
            userChoice.attr("data-guessvalue", i);
            $("#answers").append(userChoice);
        }
       
    }
    //timer start
    function runTimer() {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }
     //timer countdown
     function decrement() {
        $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
        timer--;
        //stop timer if reach 0
        if (timer === 0) {
            unanswerCount++;
            stop();
            $("#answers").html("<p>Time is up! The correct answer is: " + pick.answers[pick.correctAnswers] + "</p>");
        }
    }
    //timer stop
    function stop() {
        running = false;
        clearInterval(intervalId);
    }

    //       //Timer holder function
    //       function timerHolder() {
    //         clearInterval(clock);
    //         clock = setInterval(seconds, 1000);
    //         function seconds() {
    //           if (timer === 0) {
    //             clearInterval(clock);
    //             unanswered();
    //           } else if (timer > 0) {
    //             timer--;
    //           }
    //           $('#timeLeft').html(timer);
    //         }
    //       } 

    //click function to select answer and outcomes
    $(".answerchoice").on("click", function () {
        //grab array position from userGuess
        userGuess = parseInt($(this).attr("data-guessvalue"));

        //correct guess or wrong guess outcomes
        if (userGuess === pick.correctAnswer) {
            stop();
            correctAnswers++;
            userGuess = "";
            $("#answers").html("<p>Correct!</p>");

        } else {
            stop();
            incorrectAnswers++;
            userGuess = "";
            $("#answers").html("<p>Wrong! The correct answer is: " + pick.answers[pick.correctAnswer] + "</p>");
        }
    });


    // // countdown();
    // // //clicking an answer will pause the time and setup answerPage
    // // $('.thisChoice').on('click',function(){
    // //     userSelect = $(this).data('index');
    // //     clearInterval(time);
    // //     answerPage();
    // // });
    // // }

    // // function countdown(){
    // // seconds = 15;
    // // $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    // // answered = true;
    // // //sets timer to go down
    // // time = setInterval(showCountdown, 1000);
    // // }

    // // function showCountdown(){
    // // seconds--;
    // // $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    // // if(seconds < 1){
    // //     clearInterval(time);
    // //     answered = false;
    // //     answerPage();
    // // }
    // // }
    // function scoreboard(){
    // 	$('#timeLeft').empty();
    // 	$('#finalMessage').html(messages.finished);
    // 	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
    // 	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
    // 	$('#unanswered').html("Unanswered: " + unanswered);
    // 	$('#startOverBtn').addClass('reset');
    // 	$('#startOverBtn').show();
    // $('#startOverBtn').html('Start Over?');
    // }

    //click on start button to start the game   
    $(".button").on("click", function () {
        $(this).hide();
        for (
            var i = 0; i < triviaQuestions.length; i++) {
            holder.push(triviaQuestions[i]);
        }
        loadQuestions();
        runTimer();
    });

    $("#startOverBtn").on("click", function () {
        $("#startOverBtn").hide();
        $("#currentQuestion").empty();
        $("#answers").empty();
        for (var i = 0; i < holder.length; i++) {
            options.push(holder[i]);
        }
        runTimer();
        loadQuestions();

    })

})