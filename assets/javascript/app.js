//object for the game holder for questions and answers
let app = {

    appQuestions: [
        number1 = {
            //contents for question 1
            q: "Who has the quirk, All for One?",
            //a1[1] is the real answer
            answers: {
                a: "Bakugo Katsuki",
                b: "Midoriya Izuku",
                c: "Mina Ashido",
                d: "Yuga Aoyama",
            },
            correctAnswer: "c",
        },
        number2 = {
            q: "Who is not in Class 1-A?",
            answers: {
                a: "Kosei Tsuburaba",
                b: "Shoto Todoroki",
                c: "Fumikage Tokoyami",
                d: "Tsuyu Asui",
            },
            correctAnswer: "a",
        },
        number3 = {
            q: "Midoriya Izuku was born quirkless.",
            answers: {
                a: "True",
                b: "False",
            },
            correctAnswer: "a",
        },
        number4 = {
            q: "What is Shota Aizawa’s quirk?",
            answers: {
                a: "Strength Enhancement",
                b: "Air Jet",
                c: "Quirk Nullification",
                d: "Black Hole",
            },
            correctAnswer: "c",
        },
        number5 = {
            q: "Who is the main Villain in My Hero Academy?",
            answers: {
                a: "Toga Himiko",
                b: "Chisaki Kai",
                c: "Nomu",
                d: "Shigaraki Tomura",
            },
            correctAnswer: "d",
        },
        number6 = {
            q: "Who get captured during the Forest Training Arc?",
            answers: {
                a: "All Might",
                b: "Gentle Criminal",
                c: "Bakugo Katsuki",
                d: "Amajiki Tamaki",
            },
            correctAnswer: "c",
        },
        number7 = {
            q: "People who illegally use their quirks for hero work are called vigilanties.",
            answers: {
                a: "True",
                b: "False",
            },
            correctAnswer: "a",
        },
        number8 = {
            q: "One-for-All is All Mights teacher.",
            answers: {
                a: "True",
                b: "False",
            },
            correctAnswer: "b",
        },
        number9 = {
            q: "What is U.A High School’s motto?",
            answers: {
                a: "Carpe Diem",
                b: "Heroes of Today",
                c: "Plus Ultra",
                d: "Villains Beware",
            },
            correctAnswer: "c",
        },
        number10 = {
            q: "Which hero has the quirk of characteristics of a frog?",
            answers: {
                a: "Jeanist",
                b: "Froppy",
                c: "Lemillion",
                d: "Thirteen"
            },
            correctAnswer: "b",
        }
    ],
    //Array for questions for displaying
    questionsArr: [],
    choicesArr: [],
    




    questionPush: function () {
        for (i = 0; i < app.appQuestions.length; i++) {
            let ident = i + 1;
            app.questionsArr.push(app.appQuestions[i].q);
            $('#app-main').append('<div class="questions">'+ ident + ". " + app.appQuestions[i].q);

            $('#app-main').append("<div class='answers'>")

        }
        
        $(".answers").append('<form>');
        console.log(app.questionsArr);
    },

    choicesPush: function () {
        console.log(1);
        for (i = 0; i < app.appQuestions.answers.length; i++){
        let position = app.appQuestions[i];
        //for loop for going through appquestions array
        for (i = 0; i < position.answers[i].length; i++){
            //variable to access items in array
            console.log(i)
            $(`form`).append("<input type='radio' name='idk'>");
            
              
        };
    }

    },




    // //function to show questions on top page
    // showQuestions: function () {

    //     //for loop to loop through the questions array
    //     for (i = 0; i < app.questionsArr.length; i++) {
    //         for (i = 0; i < app.choicesArr.length; i++) {
    //             $('#app-main').append('<div class="questions">' + app.questionsArr[i]);
    //             for (j = 0; j < app.choicesArr[i].length; j++) {
    //                 $('#app-main').append(" <input type='radio'> " + app.choicesArr[i][j] + "</div>");
    //             }
    //         }
    //     }
    // },


    gameStart: function () {
        app.questionPush();
        app.choicesPush();
        // app.showQuestions();

    },

};
$(document).ready(app.gameStart);
//testing to see if calling on object values work
// console.log(app.appQuestions)
// console.log(app.questionsArr)
// console.log(app.appQuestions.number1.q1)
// console.log(app.appQuestions.number1.a1),
// console.log(app.appQuestions.number1.a1[1])


