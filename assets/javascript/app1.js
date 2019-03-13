$(document).ready(function () {
    // 10 Questions and Answers
    var triviaQuestions = [
        {
            question: " How many colours are there in a rainbow?",
            answerList: ["6", "7", "8", "5"],
            answer: 1
        },
        {
            question: " What do you call a time span of one thousand years? ",
            answerList: ["Millennium", "Century", "Decade", "Eon"],
            answer: 0,
        },
        {
            question: " How many squares are there on a chess board?",
            answerList: ["60", "64", "70", "65"],
            answer: 1,
        },
        {
            question: " Which is NOT one of the four types of teeth?",
            answerList: ["Molars", "Incisors", "Canines", "Post-molars"],
            answer: 3,
        },
        {
            question: " How many American cents make up a dime?",
            answerList: ["25", "10", "15", "5"],
            answer: 1
        },
        {
            question: " What is the average temperature of the human body, in degrees centigrade?",
            answerList: ["35", "37", "40", "30"],
            answer: 1
        },
        {
            question: " What is rum distilled from?",
            answerList: ["Sugar cane", "Wheat", "Millet", "Rice"],
            answer: 0
        },
        {
            question: " Which common household item, usually found in a kitchen or utility room, did Hamilton Smith invent in 1858?",
            answerList: ["Oven", "Dryer", "Washing machine", "Refrigerator"],
            answer: 2
        },
        {
            question: " How many symphonies did Beethoven compose?",
            answerList: ["6", "9", "8", "5"],
            answer: 1
        },
        {
            question: " Which species of mollusc and a planet share a name?",
            answerList: ["Pluto", "Venus", "Mars", "Mercury"],
            answer: 1
        }

    ]
    var currentQuestion;
    var correctAnswer;
    var incorrectAnswer;
    var unanswered;
    var seconds;
    var time;
    var answered;
    var pick;
    var userSelect;
    var messages = {
        correct: "Yes, that's right!",
        incorrect: "No, that's not it.",
        endTime: "Out of time!",
        finished: "Alright! Let's see how well you did."
    };

    //Start the Game
    $(".button").on("click", function () {
        $(this).hide();
        newGame();
    });

    $("#startOverBtn").on("click", function () {
        $(this).hide();
        newGame();
    });

    function newGame() {
        $("#finalMessage").empty();
        $("#correctAnswers").empty();
        $("#incorrectAnswers").empty();
        $("#unanswered").empty();
        currentQuestion = 0;
        correctAnswer = 0;
        incorrectAnswer = 0;
        unanswered = 0;
        newQuestion();
    }

    function newQuestion() {
        $("#message").empty();
        $("#correctedAnswer").empty();
        answered = true;

        //sets up new questions & answerList
        //generate random index in array
        index = Math.floor(Math.random() * triviaQuestions.length);
        pick = triviaQuestions[index];

        //	if (pick.shown) {
        //		//recursive to continue to generate new index until one is chosen that has not shown in this game yet
        //		displayQuestion();
        //	} else {
        //		console.log(pick.question);
        //iterate through answer array and display

        $("#currentQuestion").html("<h2>" + pick.question + "</h2>");
        for (var i = 0; i < pick.answerList.length; i++) {
            var userChoice = $("<div>");
            userChoice.addClass("answerchoice");
            userChoice.html(pick.answerList[i]);
            //assign array position to it so can check answer
            userChoice.attr("data-guessvalue", i);
            $("#answers").append(userChoice);
        }
        // $("#currentQuestion").html(
        //     "Question #" + (currentQuestion + 1) + "/" + triviaQuestions.length
        // );
        // $(".question").html(
        //     "<h2>" + triviaQuestions[currentQuestion].question + "</h2>"
        // );
        // for (var i = 0; i < 4; i++) {
        //     var choices = $("<div>");
        //     choices.text(triviaQuestions[currentQuestion].answerList[i]);
        //     choices.attr({ "data-index": i });
        //     choices.addClass("thisChoice");
        //     $(".answerList").append(choices);
        // }

        //Setting a timer for each question
        countdown();
        //clicking an answer will pause the time and setup answerPage
        $(".thisChoice").on("click", function () {
            userSelect = $(this).data("index");
            clearInterval(time);
            answerPage();
        });
    }

    function countdown() {
        seconds = 10;
        $("#timeLeft").html("<h3>Time Remaining: " + seconds + "</h3>");
        answered = true;
        //sets timer to go down
        time = setInterval(showCountdown, 1000);
    }

    function showCountdown() {
        seconds--;
        $("#timeLeft").html("<h3>Time Remaining: " + seconds + "</h3>");
        if (seconds < 1) {
            clearInterval(time);
            answered = false;
            answerPage();
        }
    }
    $("#answers").on("click", function () {
        //grab array position from userGuess
        userGuess = parseInt($(this).attr("data-guessvalue"));
    })
        function answerPage() {
            $("#currentQuestion").empty();
            $(".thisChoice").empty(); //Clears question page
            $(".question").empty();


            var rightAnswerText =
                triviaQuestions[currentQuestion].answerList[
                triviaQuestions[currentQuestion].answer
                ];
            var rightAnswerIndex = triviaQuestions[currentQuestion].answer;

            //checks to see if correct, incorrect, or unanswered

            if (userSelect == rightAnswerIndex && answered == true) {
                correctAnswer++;
                $("#message").html(messages.correct);
            } else if (userSelect != rightAnswerIndex && answered == true) {
                incorrectAnswer++;
                $("#message").html(messages.incorrect);
                $("#correctedAnswer").html("The correct answer was: " + rightAnswerText);
            } else {
                unanswered++;
                $("#message").html(messages.endTime);
                $("#correctedAnswer").html("The correct answer was: " + rightAnswerText);
                answered = true;
            }

            if (currentQuestion == triviaQuestions.length - 1) {
                setTimeout(scoreboard, 1300);
            } else {
                currentQuestion++;
                setTimeout(newQuestion, 1300);
            }

        }

        function scoreboard() {
            $("#timeLeft").empty();
            $("#message").empty();
            $("#correctedAnswer").empty();
            $("#finalMessage").html(messages.finished);
            $("#correctAnswers").html("Correct Answers: " + correctAnswer);
            $("#incorrectAnswers").html("Incorrect Answers: " + incorrectAnswer);
            $("#unanswered").html("Unanswered: " + unanswered);
            $("#startOverBtn").addClass("reset");
            $("#startOverBtn").show();
            $("#startOverBtn").html("Start Over?");
        }
    })