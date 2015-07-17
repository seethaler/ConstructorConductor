//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.

  //code here

String.prototype.reverse = function(arr) {
  var backwards = '';
  for (var i = arr.length -1; i >=0; i--)
    backwards += arr[i];
    return backwards;
}
  //
  // String.prototype.reverse('harrison');

  var jake = 'harrison';


  // jake;

jake.reverse(jake);
