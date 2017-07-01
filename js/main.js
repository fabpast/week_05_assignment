$(document).ready(function() {
  var doSomeStuff = function(event) {
    // prevents form submission
    event.preventDefault();
    // reads user input which will be a city name
    var city = $('#city-type').val();
    // converts the city name to lowercase (so that we don't have to worry about case-sensitive)
    var lowerCase = city.toLowerCase();
    // check if city is 'nyc'
    if (lowerCase === "nyc" || "new york city") {
      // change the body's background image to the 'nyc.jpg' image
      $('body').css('background-image', 'url(images/nyc.jpg)');    
    }
  }

  $('form').submit(doSomeStuff)
});
