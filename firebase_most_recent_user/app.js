console.log("Javascript")
    //  START CODING BELOW!!

    // Initialize Firebase

var config = {
  apiKey: "AIzaSyAJS4YQWU5DmESeYueG1qH1NGkjv3DncEY",
  authDomain: "fir-click-counter-7cdb9.firebaseapp.com",
  databaseURL: "https://fir-click-counter-7cdb9.firebaseio.com",
  storageBucket: "fir-click-counter-7cdb9.appspot.com"
};

firebase.initializeApp(config);

// Create a variable to reference the database

var database = firebase.database();
console.log("database variable" + database);

// Capture Button Click
$("#add-user").on("click", function(event) {
  // Don't refresh the page!
  event.preventDefault();

  name = $("#name-input").val().trim();
  email = $("#email-input").val().trim(); 
  age = $("#age-input").val().trim(); 
  comment = $("#comment-input").val().trim(); 

  // Code in the logic for storing and retrieving the most recent user.
  database.ref().set({
    name: name,
    email: email,
    age: age,
    comment: comment
  });
});


database.ref().on("value", function(snapshot) {
   $("#name-display").text(snapshot.val().name);
   $("#age-display").text(snapshot.val().age);
   $("#email-display").text(snapshot.val().email);
   $("#comment-display").text(snapshot.val().comment);
});
