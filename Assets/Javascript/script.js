//Declare variables for html elemnts
var startButton = document.querySelector("#startButton");
var startPage = document.querySelector(".startPage");

var timeEl = document.querySelector(".time");

var firstQuestionPage = document.querySelector('.firstQuestionPage');
var q1a1 = document.querySelector('#q1a1');
var q1a2 = document.querySelector('#q1a2');
var q1a3 = document.querySelector('#q1a3');
var q1a4 = document.querySelector('#q1a4');


var secondQuestionPage = document.querySelector('.secondQuestionPage');
var q2a1 = document.querySelector('#q2a1');
var q2a2 = document.querySelector('#q2a2');
var q2a3 = document.querySelector('#q2a3');
var q2a4 = document.querySelector('#q2a4');


var thirdQuestionPage = document.querySelector('.thirdQuestionPage');
var q3a1 = document.querySelector('#q3a1');
var q3a2 = document.querySelector('#q3a2');
var q3a3 = document.querySelector('#q3a3');
var q3a4 = document.querySelector('#q3a4');

var fourthQuestionPage = document.querySelector('.fourthQuestionPage');
var q4a1 = document.querySelector('#q4a1');
var q4a2 = document.querySelector('#q4a2');
var q4a3 = document.querySelector('#q4a3');
var q4a4 = document.querySelector('#q4a4');

var fifthQuestionPage = document.querySelector('.fifthQuestionPage');
var q5a1 = document.querySelector('#q5a1');
var q5a2 = document.querySelector('#q5a2');
var q5a3 = document.querySelector('#q5a3');
var q5a4 = document.querySelector('#q5a4');

var endPage = document.querySelector('.endPage');
var finalscore = document.querySelector("#finalscore");
var restartButton = document.querySelector('#restartButton');
var saveButton = document.querySelector('#saveButton');
var textArea = document.querySelector("#textArea");
var notification = document.querySelector("#notification");
var topname1 = document.querySelector("#topname1");
var topname2 = document.querySelector("#topname2");
var topname3 = document.querySelector("#topname3");

var nameSaved = false;

var secondsLeft = 20;

var quizEnd = false;

var wrongAnswer = false;

// Timer
function countdown(){
    secondsLeft = 20;

    var timeInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(wrongAnswer){
            wrongAnswer = false;
            secondsLeft = (secondsLeft- 5);
        }
        else if (quizEnd) {
            finalscore.textContent = "Your final score is " + secondsLeft;
            // localStorage.setItem("highScores", JSON.stringify(highScores));
            clearInterval(timeInterval);  
        }
        else if (secondsLeft <= 0){
            quizEnd = true;
            clearInterval(timeInterval);
            finalscore.textContent = "Your final score is " + secondsLeft;
            pageArray = [firstQuestionPage, secondQuestionPage, thirdQuestionPage, fourthQuestionPage, fifthQuestionPage];
            firstQuestionPage.setAttribute('style', 'display:none;');
            secondQuestionPage.setAttribute('style', 'display:none;');
            thirdQuestionPage.setAttribute('style', 'display:none;');
            fourthQuestionPage.setAttribute('style', 'display:none;');
            fifthQuestionPage.setAttribute('style', 'display:none;');
            endPage.setAttribute('style', 'display:block;');      
            
            
        }
      }, 1000);
}
timeEl.textContent = "20";

//Next Page Activation
startButton.addEventListener('click', function(){
    startPage.setAttribute('style', 'display:none;');
    firstQuestionPage.setAttribute('style', 'display:block;');
    countdown();
})

q1array = [q1a1, q1a2, q1a3, q1a4];
for(var i=0; i < 4; i++) {
    if (i==0){
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

q2array = [q2a1, q2a2, q2a3, q2a4];
for(var i=0; i < 4; i++) {
    if (i==0){
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

q3array = [q3a1, q3a2, q3a3, q3a4];
for(var i=0; i < 4; i++) {
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

q4array = [q4a1, q4a2, q4a3, q4a4];
for(var i=0; i < 4; i++) {
    if (i==0){
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

q5array = [q5a1, q5a2, q5a3, q5a4];
for(var i=0; i < 4; i++) {
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
        })
    }
}

restartButton.addEventListener('click', function(){
    timeEl.textContent = "20";
    endPage.setAttribute('style', 'display:none;');
    firstQuestionPage.setAttribute('style', 'display:block;');
    quizEnd = false;
    nameSaved = false;
    countdown();
})

var topscorename1 = "";
    var topscorename2 = "";
    var topscorename3 = "";
    var topscore1 = 0;
    var topscore2 = 0;
    var topscore3 = 0;

saveButton.addEventListener('click', function(){
    var highScores = {
        name: document.querySelector("textarea").value,
        score: secondsLeft
    };

    localStorage.setItem("highScores", JSON.stringify(highScores));
    var lastUser = JSON.parse(localStorage.getItem("highScores"));
    var scoreName= lastUser.name;
    var scoreScore = lastUser.score;

    if(scoreName.length <= 0 || scoreName.length > 10){
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
                
                topname1.textContent = scoreName + " " + scoreScore;
                topname2.textContent = topscorename2 + " " + topscore2;
                topname3.textContent = topscorename3 + " " + topscore3;
                nameSaved = true;
            }
            else if(scoreScore > topscore2){
                topscorename3 = topscorename2;
                topscore3 = topscore2;
                topscorename2 = scoreName;
                topscore2 = scoreScore;

                topname2.textContent = scoreName + " " + scoreScore;
                topname3.textContent = topscorename3 + " " + topscore3;
                nameSaved = true;
            }
            else if(scoreScore > topscore3){
                topscorename3 = scoreName;
                topscore3 = scoreScore;

                topname3.textContent = scoreName + " " + scoreScore;
                nameSaved = true;
            }
        }
    }
})


