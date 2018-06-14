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
        },
        number2= {
            q: "Who is not in Class 1-A?",
            a: ["Kosei Tsuburaba", "Shoto Todoroki", "Fumikage Tokoyami", "Tsuyu Asui"],
        },
        number3= {
            q: "Midoriya Izuku was born quirkless.",
            a: ["True", "False"],
        },
        number4={
            q: "What is Shota Aizawa’s quirk?",
            a: ["Strength Enhancement", "Air Jet", "Quirk Nullification", "Black Hole"],
        },
        number5={
            q: "Who is the main Villain in My Hero Academy?",
            a: ["Toga Himiko", "Chisaki Kai", "Nomu", "Shigaraki Tomura"],
        },
        number6= {
            q: "Who get captured during the Forest Training Arc?",
            a: ["All Might", "Gentle Criminal", "Bakugo Katsuki", "Amajiki Tamaki"],
        },
        number7= {
            q: "People who illegally use their quirks for hero work are called vigilanties.",
            a: ["True", "False"],
        },
        number8= {
            q: "One-for-All is All Mights teacher.",
            a: ["True", "False"],
        },
        number9= {
            q: "What is U.A High School’s motto?",
            a: ["Carpe Diem", "Heroes of Today", "Plus Ultra", "Villains Beware"],
        },
        number10={
            q: "Which hero has the quirk of characteristics of a frog?",
            a: ["Jeanist", "Froppy", "Lemillion", "Thirteen"],
        },
    ],

    getQuestions: function() {
        for(i=0; i< app.appQuestions.length; i++) {
            app.questionsArr.push(app.appQuestions[i].q);
            console.log(this.questionsArr);
        }
    },
    
}
console.log(app.appQuestions[3]);


