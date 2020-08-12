$(function() {

  var background = $("li:first").css("background-color");

  $("ul").append("<p> color was " + background + "</p>");

  $("li").css({
    "background-color" : "#c5a996",
    "border": "1px solid white",
    "color" : "black",
    "text-shadow" : "none",
    "font-family": "Georgia"});
});
