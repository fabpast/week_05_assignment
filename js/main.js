$(document).ready(function() {
  var doSomeStuff = function(event) {
    event.preventDefault();
    if (lowerCase === "nyc" || "new york city") {
      $('body').css('background-image', 'url(images/nyc.jpg)');
    } else if (lowerCase === "la" || "los angeles") {
      $('body').css('background-image', 'url(images/la.jpg)');
    }
  }
// I moved these two variables (city and lowerCase) outside the if function because "else if" couldn't read them
  var city = $('#city-type').val();
  var lowerCase = city.toLowerCase();
  $('form').submit(doSomeStuff)
});
