/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

function User(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

var users = [];

var tyler = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS')
var cahlan = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags')
var lenny = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup')


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

users.push(tyler, cahlan, lenny)

console.log(tyler);
//Console.log all of Tylers information

  //code here

console.log(lenny);
//Now console.log all of Lennys information

  //code here


//Now create another instance of User using your own information and then add that to your users array.

var jake = new User('Jacob Harrison', 'jake@seethalers.com', 'whatup')

console.log(jake);

console.log(mrLooper);
//Now loop through your users Array and console.log every users name.

    function mrLooper(arr) {
      for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].name);
      }
    }

    mrLooper(users)
