//Variables to link HTML elements
// //Timer
var timeEl = document.querySelector(".time");

// // Start Page
var startButton = document.querySelector("#startButton");
var startPage = document.querySelector(".startPage");

// //First Question Page
var firstQuestionPage = document.querySelector('.firstQuestionPage');
var q1a1 = document.querySelector('#q1a1');
var q1a2 = document.querySelector('#q1a2');
var q1a3 = document.querySelector('#q1a3');
var q1a4 = document.querySelector('#q1a4');

// //Second Question Page
var secondQuestionPage = document.querySelector('.secondQuestionPage');
var q2a1 = document.querySelector('#q2a1');
var q2a2 = document.querySelector('#q2a2');
var q2a3 = document.querySelector('#q2a3');
var q2a4 = document.querySelector('#q2a4');

// //Third Question Page
var thirdQuestionPage = document.querySelector('.thirdQuestionPage');
var q3a1 = document.querySelector('#q3a1');
var q3a2 = document.querySelector('#q3a2');
var q3a3 = document.querySelector('#q3a3');
var q3a4 = document.querySelector('#q3a4');

// //Fourth Question Page
var fourthQuestionPage = document.querySelector('.fourthQuestionPage');
var q4a1 = document.querySelector('#q4a1');
var q4a2 = document.querySelector('#q4a2');
var q4a3 = document.querySelector('#q4a3');
var q4a4 = document.querySelector('#q4a4');

// //Fifth Question Page
var fifthQuestionPage = document.querySelector('.fifthQuestionPage');
var q5a1 = document.querySelector('#q5a1');
var q5a2 = document.querySelector('#q5a2');
var q5a3 = document.querySelector('#q5a3');
var q5a4 = document.querySelector('#q5a4');

// //End Page
var endPage = document.querySelector('.endPage');
var finalscore = document.querySelector("#finalscore");
var restartButton = document.querySelector('#restartButton');
var saveButton = document.querySelector('#saveButton');
var textArea = document.querySelector("#textArea");
var notification = document.querySelector("#notification");
var topname1 = document.querySelector("#topname1");
var topname2 = document.querySelector("#topname2");
var topname3 = document.querySelector("#topname3");

// //Logic & Value Variables
var nameSaved = false;
var quizEnd = false;
var wrongAnswer = false;
var secondsLeft = 30;
timeEl.textContent = "30";

//Timer
function countdown(){
    secondsLeft = 30;
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(wrongAnswer){
            wrongAnswer = false;
            secondsLeft = (secondsLeft- 5);
        }
        else if (quizEnd) {
            finalscore.textContent = "Your final score is " + secondsLeft;
            clearInterval(timeInterval);  
        }
        else if (secondsLeft <= 0){
            clearInterval(timeInterval);
            quizEnd = true;
            finalscore.textContent = "Your final score is " + secondsLeft;
            firstQuestionPage.setAttribute('style', 'display:none;');
            secondQuestionPage.setAttribute('style', 'display:none;');
            thirdQuestionPage.setAttribute('style', 'display:none;');
            fourthQuestionPage.setAttribute('style', 'display:none;');
            fifthQuestionPage.setAttribute('style', 'display:none;');
            endPage.setAttribute('style', 'display:block;');     
        }
      }, 1000);
}

//Listeners for next page activation
// //Start Button --> First Page
startButton.addEventListener('click', function(){
    startPage.setAttribute('style', 'display:none;');
    firstQuestionPage.setAttribute('style', 'display:block;');
    countdown();
})

// //First Question --> Second Question
q1array = [q1a1, q1a2, q1a3, q1a4];
for(var i=0; i < 4; i++) {
    //Answer i = 3
    if (i==3){
        q1array[i].addEventListener('click', function(){
        firstQuestionPage.setAttribute('style', 'display:none;');
        secondQuestionPage.setAttribute('style', 'display:block;');
        })
    }   
    else {
        q1array[i].addEventListener('click', function(){
        firstQuestionPage.setAttribute('style', 'display:none;');
        secondQuestionPage.setAttribute('style', 'display:block;');
        wrongAnswer = true;
        })
    }
}

// //Second Question --> Third Question
q2array = [q2a1, q2a2, q2a3, q2a4];
for(var i=0; i < 4; i++) {
    //Answer i = 1
    if (i==1){
        q2array[i].addEventListener('click', function(){
        secondQuestionPage.setAttribute('style', 'display:none;');
        thirdQuestionPage.setAttribute('style', 'display:block;');
        })
    }   
    else {
        q2array[i].addEventListener('click', function(){
            secondQuestionPage.setAttribute('style', 'display:none;');
        thirdQuestionPage.setAttribute('style', 'display:block;');
        wrongAnswer = true;
        })
    }
}

// //Third Question --> Fourth Question
q3array = [q3a1, q3a2, q3a3, q3a4];
for(var i=0; i < 4; i++) {
    //Answer i = 0
    if (i==0){
        q3array[i].addEventListener('click', function(){
        thirdQuestionPage.setAttribute('style', 'display:none;');
        fourthQuestionPage.setAttribute('style', 'display:block;');
        })
    }   
    else {
        q3array[i].addEventListener('click', function(){
            thirdQuestionPage.setAttribute('style', 'display:none;');
        fourthQuestionPage.setAttribute('style', 'display:block;');
        wrongAnswer = true;
        })
    }
}

// //Fourth Question --> Fifth Question
q4array = [q4a1, q4a2, q4a3, q4a4];
for(var i=0; i < 4; i++) {
    // Answer i = 1
    if (i==1){
        q4array[i].addEventListener('click', function(){
        fourthQuestionPage.setAttribute('style', 'display:none;');
        fifthQuestionPage.setAttribute('style', 'display:block;');
        })
    }   
    else {
        q4array[i].addEventListener('click', function(){
        fourthQuestionPage.setAttribute('style', 'display:none;');
        fifthQuestionPage.setAttribute('style', 'display:block;');
        wrongAnswer = true;
        })
    }
}

// //Fifth Question --> End Page
q5array = [q5a1, q5a2, q5a3, q5a4];
for(var i=0; i < 4; i++) {
    //Answer i = 0
    if (i==0){
        q5array[i].addEventListener('click', function(){
        fifthQuestionPage.setAttribute('style', 'display:none;');
        endPage.setAttribute('style', 'display:block;');
        quizEnd = true;
        })
    }   
    else {
        q5array[i].addEventListener('click', function(){
        fifthQuestionPage.setAttribute('style', 'display:none;');
        endPage.setAttribute('style', 'display:block;');
        wrongAnswer = true;
        quizEnd = true;
        })
    }
}

// //End Page --> First Question (RESTART)
restartButton.addEventListener('click', function(){
    timeEl.textContent = "30";
    endPage.setAttribute('style', 'display:none;');
    firstQuestionPage.setAttribute('style', 'display:block;');
    quizEnd = false;
    nameSaved = false;
    countdown();
})

//Highscore Board
// //Variables
var topscorename1 = "";
    var topscorename2 = "";
    var topscorename3 = "";
    var topscore1 = 0;
    var topscore2 = 0;
    var topscore3 = 0;

// //Save Button Listener
saveButton.addEventListener('click', function(){
    var highScores = {
        name: document.querySelector("textarea").value,
        score: secondsLeft
    };

    localStorage.setItem("highScores", JSON.stringify(highScores));
    var lastUser = JSON.parse(localStorage.getItem("highScores"));
    var scoreName= lastUser.name;
    var scoreScore = lastUser.score;

    if(scoreName.length <= 0 || scoreName.length > 2){
        notification.textContent = "Please enter a name with a valid length";
    } else {
        if(nameSaved == false){
            if(scoreScore > topscore1){
                topscorename3 = topscorename2;
                topscore3 = topscore2;
                topscorename2 = topscorename1;
                topscore2 = topscore1;
                topscorename1 = scoreName;
                topscore1 = scoreScore;
                
                topname1.textContent = "1. " + scoreName + " " + scoreScore;
                topname2.textContent = "2. " + topscorename2 + " " + topscore2;
                topname3.textContent = "3. " + topscorename3 + " " + topscore3;
                nameSaved = true;
            }
            else if(scoreScore > topscore2){
                topscorename3 = topscorename2;
                topscore3 = topscore2;
                topscorename2 = scoreName;
                topscore2 = scoreScore;

                topname2.textContent = "2. " + scoreName + " " + scoreScore;
                topname3.textContent = "3. " + topscorename3 + " " + topscore3;
                nameSaved = true;
            }
            else if(scoreScore > topscore3){
                topscorename3 = scoreName;
                topscore3 = scoreScore;

                topname3.textContent = "3. " + scoreName + " " + scoreScore;
                nameSaved = true;
            }
        }
    }
})


