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
      $(".java").show();
      $(".python").hide();
      $(".ruby").hide();
      $(".elite").hide();
    } else if (score <=4){
      $(".python").show();
      $(".java").hide();
      $(".ruby").hide();
      $(".elite").hide();
    } else if (score >=6){
      $(".ruby").show();
      $(".java").hide();
      $(".python").hide();
      $(".elite").hide();
    } else if (score = 0,5){
      $(".elite").show();
      $(".java").hide();
      $(".python").hide();
      $(".ruby").hide();
    }
  });
});
