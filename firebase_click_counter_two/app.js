console.log("JavaScript");

var config = {
  apiKey: "AIzaSyAJS4YQWU5DmESeYueG1qH1NGkjv3DncEY",
  authDomain: "fir-click-counter-7cdb9.firebaseapp.com",
  databaseURL: "https://fir-click-counter-7cdb9.firebaseio.com",
  storageBucket: "fir-click-counter-7cdb9.appspot.com"
};

firebase.initializeApp(config);

// VARIABLES
// --------------------------------------------------------------------------------

var database = firebase.database();
var clickCounter = 0;

// FUNCTIONS + EVENTS
// --------------------------------------------------------------------------------

$("#click-button").on("click", function() {
  clickCounter++;
  database.ref().set({
    clickCount: clickCounter
  });
});

// MAIN PROCESS + INITIAL CODE
// --------------------------------------------------------------------------------

database.ref().on("value", function(snapshot) {
  console.log(snapshot.val());
  $("#click-value").text(snapshot.val().clickCount);
  clickCounter = snapshot.val().clickCount;
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

