//object for the game holder for questions and answers
let app = {
    questionsArr: [],
    choicesArr: [],



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
        },
        number3 = {
            q: "Midoriya Izuku was born quirkless.",
            a: ["True", "False"],
        },
        number4 = {
            q: "What is Shota Aizawa’s quirk?",
            a: ["Strength Enhancement", "Air Jet", "Quirk Nullification", "Black Hole"],
        },
        number5 = {
            q: "Who is the main Villain in My Hero Academy?",
            a: ["Toga Himiko", "Chisaki Kai", "Nomu", "Shigaraki Tomura"],
        },
        number6 = {
            q: "Who get captured during the Forest Training Arc?",
            a: ["All Might", "Gentle Criminal", "Bakugo Katsuki", "Amajiki Tamaki"],
        },
        number7 = {
            q: "People who illegally use their quirks for hero work are called vigilanties.",
            a: ["True", "False"],
        },
        number8 = {
            q: "One-for-All is All Mights teacher.",
            a: ["True", "False"],
        },
        number9 = {
            q: "What is U.A High School’s motto?",
            a: ["Carpe Diem", "Heroes of Today", "Plus Ultra", "Villains Beware"],
        },
        number10 = {
            q: "Which hero has the quirk of characteristics of a frog?",
            a: ["Jeanist", "Froppy", "Lemillion", "Thirteen"],
        },
    ],
    //pushing questions into array
    questionPush: function () {

        // for (i = 0; i < app.appQuestions.length; i++) {
        //     $('#app-main').append('<div class="questions">' + (i + 1) + ". " + app.appQuestions[i].q);
        //     $('#app-main').append('<div class="answers">');
        //     for(j = 0; j < app.appQuestions[i].a.length; j++){
        //         if($(".answers:last-child").val() < app.appQuestions[i].a.length){
        //         $(".answers").append("<input type= 'radio' name='radino' value='" + j + "'>" + app.appQuestions[i].a[j]);
        //         }
        //     }
        // }
        // console.log(app.questionsArr);


        //for loop to loop through the questions array
        for (i = 0; i < app.questionsArr.length; i++) {
            for (i = 0; i < app.choicesArr.length; i++) {
                $('#app-main').append('<div class="questions">' + app.questionsArr[i]);
                // $('#app-main').append('<div class="answers">');
                for (j = 0; j < app.choicesArr[i].length; j++) {
                    $('#app-main').append(" <input type='radio' name='radino" + i + "' value='" + j + "'>" + app.choicesArr[i][j]);
                }
            }
        }


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



    gameStart: function () {
        app.showChoices();
        app.questionPush();


    },

};
$(document).ready(app.gameStart);
// toggles radio button checked value to unchecked vice versa
$(function () {
    $('input:radio').change(function () {
        let $input = $('input:radio');
        if ($input.attr('checked')) {
            $input.removeAttr('checked');
        } else {
            $input.attr('checked', 'checked');
        }


    })

})


//setting value = app.choicesArr[i][j] and setting check string value




