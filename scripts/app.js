$(document).ready(function(){

  //basic calculator click function
  $('#basic-calc').click(function(){
    //get parameters
    var num1 = $('#basic-num-1').val();
    var num2 = $('#basic-num-2').val();
    var operator = $('#basic-operation').val();

    $('#basic-answer-alert').text(eval(num1 + " " + operator + " " +  num2));
  });

  //trip calculator click function
  $('#trip-calc').click(function(){
    //get parameters
    var distance = $('#trip-distance').val();
    var mpg = $('#trip-mpg').val();
    var cost = $('#trip-cost').val();
    var speed = $('#trip-speed').val();
    var tripAns = $('#trip-answer-alert');

    if(speed < 60){
      tripAns.text(distance / (mpg * cost));
    }else{
      tripAns.text(distance / ((mpg - (speed - 60) * 2) * cost));
    }
  });

  //bmi calculator click function
  $('#bmi-calc').click(function(){
    //get parameters
    var mass = $('#bmi-mass').val() * 2.20462;
    var height = $('#bmi-height').val() * 39.3701;

    //  Weight in Pounds / ( Height in inches x Height in inches ) ) x 703
    $('#bmi-answer-alert').text(mass / (height * height) * 703);
  });

});
