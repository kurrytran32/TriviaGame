//object for the game holder for questions and answers
let app = {
    questionsArr: [],
    choicesArr: [],
    correctNumber: 0,
    inCorrect: 0,

    timeNumber: 120,

    appQuestions: [
        number1 = {
            //contents for question 1
            q: "Who has the quirk, All for One?",
            //a1[1] is the real answer
            a: ["Bakugo Katsuki", "Midoriya Izuku", "Mina Ashido", "Yuga Aoyama"],
            correctAnswer: "1",
        },
        number2 = {
            q: "Who is not in Class 1-A?",
            a: ["Kosei Tsuburaba", "Shoto Todoroki", "Fumikage Tokoyami", "Tsuyu Asui"],
            correctAnswer: "0",
        },
        number3 = {
            q: "Midoriya Izuku was born quirkless.",
            a: ["True", "False"],
            correctAnswer: "0",
        },
        number4 = {
            q: "What is Shota Aizawa’s quirk?",
            a: ["Strength Enhancement", "Air Jet", "Quirk Nullification", "Black Hole"],
            correctAnswer: "2",
        },
        number5 = {
            q: "Who is the main Villain in My Hero Academy?",
            a: ["Toga Himiko", "Chisaki Kai", "Nomu", "Shigaraki Tomura"],
            correctAnswer: "3",
        },
        number6 = {
            q: "Who get captured during the Forest Training Arc?",
            a: ["All Might", "Gentle Criminal", "Bakugo Katsuki", "Amajiki Tamaki"],
            correctAnswer: "2",
        },
        number7 = {
            q: "People who illegally use their quirks for hero work are called vigilanties.",
            a: ["True", "False"],
            correctAnswer: "0",
        },
        number8 = {
            q: "One-for-All is All Mights teacher.",
            a: ["True", "False"],
            correctAnswer: "1",
        },
        number9 = {
            q: "What is U.A High School’s motto?",
            a: ["Carpe Diem", "Heroes of Today", "Plus Ultra", "Villains Beware"],
            correctAnswer: "2",
        },
        number10 = {
            q: "Which hero has the quirk of characteristics of a frog?",
            a: ["Jeanist", "Froppy", "Lemillion", "Thirteen"],
            correctAnswer: "1",
        },
    ],
    //pushing questions into array
    questionPush: function () {
        //for loop to loop through the questions array
        for (i = 0; i < app.questionsArr.length; i++) {
            for (i = 0; i < app.choicesArr.length; i++) {
                $('#app-main').append('<div class="questions">' + app.questionsArr[i]);
                // $('#app-main').append('<div class="answers">');
                for (j = 0; j < app.choicesArr[i].length; j++) {
                    $('#app-main').append(" <input type='radio' name='radino" + i + "' value='" + j + "'/>" + app.choicesArr[i][j]);
                }
            }
        }


    },
    //clears interval link to submit function and time decrement function
    stopFunc: function () {
        app.timeNumber = 120;
        clearInterval(intervalId);
    },
    startTime: function () {
        //prevents left over interval so it doesnt run multiple times
        clearInterval(intervalId);
        intervalId = setInterval(app.timeOut, 1000);
    },

    timeOut: function () {
        app.timeNumber--;
        //shows the timer

        $('#timer').html(`<h2>${app.timeNumber} seconds </h2>`);
        //if for when the timer hits 0
        if (app.timeNumber === 0) {
            app.stopFunc();
            alert("Time's Up!");
            //add moving to new page function display
            app.finishLine();
        }
    },

    //displays score screen when time runs out or when submit button is clicked
    finishLine: function () {
        $('#app-main').empty();
        $('#end-message').html(`<h2>Time's Up! Let's see how you did!</h2>`);
        $('#app-scoreboard').append(`<h2>Right: ${app.correctNumber}     Wrong: ${app.inCorrect} </h2>`);
        $('.submitbtn').hide();


    },
    
    //function to show questions on top page
    showChoices: function () {
        for (i = 0; i < app.appQuestions.length; i++) {
            app.questionsArr.push(app.appQuestions[i].q);
        }
        for (i = 0; i < app.appQuestions.length; i++) {
            app.choicesArr.push(app.appQuestions[i].a);
        }

    },


    checkFunction: function () {
        //to run a check on the value of 
        $("#submit").on('click', function () {
            app.stopFunc();
            if ($("input[name=radino0]:checked").val() === app.appQuestions[0].correctAnswer) {
                app.correctNumber++;
            } else {
                app.inCorrect++;
            }
            if ($("input[name=radino1]:checked").val() === app.appQuestions[1].correctAnswer) {
                app.correctNumber++;
            } else {
                app.inCorrect++;
            }
            if ($("input[name=radino2]:checked").val() === app.appQuestions[2].correctAnswer) {
                app.correctNumber++;
            } else {
                app.inCorrect++;
            }
            if ($("input[name=radino3]:checked").val() === app.appQuestions[3].correctAnswer) {
                app.correctNumber++;
            } else {
                app.inCorrect++;
            }
            if ($("input[name=radino4]:checked").val() === app.appQuestions[4].correctAnswer) {
                app.correctNumber++;
            } else {
                app.inCorrect++;
            }
            if ($("input[name=radino5]:checked").val() === app.appQuestions[3].correctAnswer) {
                app.correctNumber++;
            } else {
                app.inCorrect++;
            }
            if ($("input[name=radino6]:checked").val() === app.appQuestions[6].correctAnswer) {
                app.correctNumber++;
            } else {
                app.inCorrect++;
            }
            if ($("input[name=radino7]:checked").val() === app.appQuestions[7].correctAnswer) {
                app.correctNumber++;
            } else {
                app.inCorrect++;
            }
            if ($("input[name=radino8]:checked").val() === app.appQuestions[8].correctAnswer) {
                app.correctNumber++;
            } else {
                app.inCorrect++;
            }
            if ($("input[name=radino9]:checked").val() === app.appQuestions[9].correctAnswer) {
                app.correctNumber++;
            } else {
                app.inCorrect++;
            }
            app.finishLine();

        });
    },



    //change to start button function
    gameStart: function () {
        app.startTime();
        app.showChoices();
        app.questionPush();
        $('.submitbtn').append(`<button id='submit'>Submit</button>`);
        $('.submitbtn').show();
        app.checkFunction();

    },

};
//was used to test game
// $(document).ready(app.gameStart)
let intervalId;
$("#start").on('click', function () {
    app.gameStart();
    $("#start").hide();
})


