$(document).ready(function() {

$(".btn2").click(function(){

  var q1 = parseInt($("input:radio[name=q1]:checked").val());
  var q2 = parseInt($("input:radio[name=q2]:checked").val());
  var q3 = parseInt($("input:radio[name=q3]:checked").val());
  var q4 = parseInt($("input:radio[name=q4]:checked").val());
  var q5 = parseInt($("input:radio[name=q5]:checked").val());

  var results = function(q1, q2, q3, q4, q5) {
    return q1 + q2 + q3 + q4 + q5;

  }
  var score = results(q1, q2, q3, q4, q5);

    if (score == 10){
      $(".java").fadeIn();
      $(".python").hide();
      $(".ruby").hide();
      $(".elite").hide();
      $(".jumbotronanswer").hide();
      $(".btn2").hide();
    } else if (score <=4 && score >=0.5){
      $(".python").fadeIn();
      $(".java").hide();
      $(".ruby").hide();
      $(".elite").hide();
      $(".jumbotronanswer").hide();
      $(".btn2").hide();
    } else if (score >=6){
      $(".ruby").fadeIn();
      $(".java").hide();
      $(".python").hide();
      $(".elite").hide();
      $(".jumbotronanswer").hide();
      $(".btn2").hide();
    } else if (score = 0,5){
      $(".elite").fadeIn();
      $(".java").hide();
      $(".python").hide();
      $(".ruby").hide();
      $(".jumbotronanswer").hide();
      $(".btn2").hide();
    }
  });
});
