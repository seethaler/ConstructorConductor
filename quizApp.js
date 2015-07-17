//We're going to create the JS for a basic quiz application.

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors.

//Create a User constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

function User(name, email, password, totalScore) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.totalScore = totalScore;
}

//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

function Question(title, answersArray, rightAnswer, difficulty) {
  this.title = title;
  this.answersArray = answersArray;
  this.rightAnswer = rightAnswer;
  this.difficulty = difficulty;
}

var users = [];

//Create a users Array which is going to hold all of our users.

  //code here


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

var jake = new User ('Jacob', 'jake@seethalers.com', 'nederland', '30');
var manon = new User ('Manon', 'manon@seethalers.com', 'testing', '29');
var leiden = new User ('Leiden', 'leiden@seethalers.com', 'ponypower', '9');



//Create a questions Array which is going to hold all of our questions

var questions = [];

//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

var q1 = new Question('T/F: Inheritance is achieved in JavaScript through Prototypes?', 't', 't', '10');
var q2 = new Question('T/F: JavaScript is just a scripting version of Java', 't', 't', '10');
var q3 = new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", 't', 't', '10');

//Now push all of your instances of Question into the questions Array

  questions.push(q1, q2, q3);
  users.push(jake, manon, leiden);

//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  function mrLooper(arr, arr2) {
    for (var i = 0; i < arr.length; i++) {
      console.log('My users array looks like this: ', users[i]);
    }
    for (var i = 0; i < arr2.length; i++) {
      console.log('My questions array looks like this: ', questions[i]);
    }
  }

mrLooper(users, questions);
