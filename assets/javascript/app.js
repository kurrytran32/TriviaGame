//object for the game holder for questions and answers
let app = {

    appQuestions: {
        number1: {
            //contents for question 1
            q: "Who has the quirk, All for One?",
            //a1[1] is the real answer
            a: ["Bakugo Katsuki", "Midoriya Izuku", "Mina Ashido", "Yuga Aoyama"],
        },
        number2: {
            q: "Who is not in Class 1-A?",
            a: ["Kosei Tsuburaba", "Shoto Todoroki", "Fumikage Tokoyami", "Tsuyu Asui"],
        },
        number3: {
            q: "Midoriya Izuku was born quirkless.",
            a: ["True", "False"],
        },
        number4: {
            q: "What is Shota Aizawa’s quirk?",
            a: ["Strength Enhancement", "Air Jet", "Quirk Nullification", "Black Hole"],
        },
        number5: {
            q: "Who is the main Villain in My Hero Academy?",
            a: ["Toga Himiko", "Chisaki Kai", "Nomu", "Shigaraki Tomura"],
        },
        number6: {
            q: "Who get captured during the Forest Training Arc?",
            a: ["All Might", "Gentle Criminal", "Bakugo Katsuki", "Amajiki Tamaki"],
        },
        number7: {
            q: "People who illegally use their quirks for hero work are called vigilanties.",
            a: ["True", "False"],
        },
        number8: {
            q: "One-for-All is All Mights teacher.",
            a: ["True", "False"],
        },
        number9: {
            q: "What is U.A High School’s motto?",
            a: ["Carpe Diem", "Heroes of Today", "Plus Ultra", "Villains Beware"],
        },
        number10: {
            q: "Which hero has the quirk of characteristics of a frog?",
            a: ["Jeanist", "Froppy", "Lemillion", "Thirteen"],
        },
    },
    //Array for questions for displaying
    questionsArr: [],
    choicesArr: [],



    questionPush: function () {

        app.questionsArr.push(app.appQuestions.number1.q, app.appQuestions.number2.q, app.appQuestions.number3.q, app.appQuestions.number4.q, app.appQuestions.number5.q, app.appQuestions.number6.q, app.appQuestions.number7.q, app.appQuestions.number8.q, app.appQuestions.number9.q, app.appQuestions.number10.q)

        console.log(app.questionsArr);
    },

    choicesPush: function () {
        app.choicesArr.push(app.appQuestions.number1.a, app.appQuestions.number2.a, app.appQuestions.number3.a, app.appQuestions.number4.a, app.appQuestions.number5.a, app.appQuestions.number6.a, app.appQuestions.number7.a, app.appQuestions.number8.a, app.appQuestions.number9.a, app.appQuestions.number10.a)
        // app.choicesArr.join(" ");
        console.log(app.choicesArr);
    },
    //function to show questions on top page
    showQuestions: function () {

        //for loop to loop through the questions array
        for (i = 0; i < app.questionsArr.length; i++) {
            for (i = 0; i < app.choicesArr.length; i++) {
                $('#app-main').append('<div class="questions">' + (app.questionsArr[i]) + "<p>" + (app.choicesArr[i]) + "</p>" + "</div>");
            }
        }
    },
    // showChoices: function() {
    //for loop for length of choices array
    //set to radio buttons
    //     for (i = 0; i < app.choicesArr.length; i++) {
    //         $('.questions').append('<p>' + (app.choicesArr[i]) + "</p>");
    //     }
    // },
    gameStart: function () {
        app.questionPush();
        app.choicesPush();
        app.showQuestions();
        // app.showChoices();
    },

};
$(document).ready(app.gameStart);
//testing to see if calling on object values work
// console.log(app.appQuestions)
// console.log(app.questionsArr)
// console.log(app.appQuestions.number1.q1)
// console.log(app.appQuestions.number1.a1),
// console.log(app.appQuestions.number1.a1[1])


