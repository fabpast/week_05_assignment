$(document).ready(function() {
  var doSomeStuff = function(event) {
    event.preventDefault();
    var city = $('#city-type').val();
    var lowerCase = city.toLowerCase();
    if (lowerCase === "nyc" || lowerCase === "new york city") {
      $('body').css('background-image', 'url(images/nyc.jpg)');
    } else if (lowerCase === "la" || lowerCase === "los angeles") {
      $('body').css('background-image', 'url(images/la.jpg)');
    } else if (lowerCase === "austin") {
      $('body').css('background-image', 'url(images/austin.jpg)');
  }
// I moved these two variables (city and lowerCase) outside the if function because "else if" couldn't read them
  $('form').submit(doSomeStuff);
});
