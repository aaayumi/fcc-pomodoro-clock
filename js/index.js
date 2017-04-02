$(document).ready(function(){
    
var num1 = 25;
var num2 = 5;
var clock;
var workTimer;
var breakTimer;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
   clock = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

       if (--timer < 0) {
           clearInterval(clock);
           if(i===0){
               startBreak();
           } else if (i===1){
               startWork();
           }
       }
    }, 1000);
}

  //click plus button and add time
   $(".btn1").click(function(){
   num1 += 1;
   $(".work").text(num1);
  });
  
  //click minus button and reduce time
    $(".btn2").click(function(){
   num1 -= 1;
   $(".work").text(num1);
   if (num1 < 0) {
     num1 = 0;
     $(".work").text(0);
   }
  });
  
 //set up Break time
    //click plus button and add time
   $(".btn3").click(function(){
   num2 += 1;
   $(".break").text(num2);
  });
  
  //click minus button and reduce time
    $(".btn4").click(function(){
   num2 -= 1;
   $(".break").text(num2);
   if (num2 < 0) {
     num2 = 0;
     $(".break").text(0);
   }
  });
  
//start the clock 
   $("#startbtn").click(function(){
       if($("#startbtn").attr("class") ==="start"){
  $("#startbtn").attr("class","pause").text("Pause");
       startWork();
       }else{
   $("#startbtn").attr("class","start").text("Start");
        clearInterval(clock);  
               }
  });
  
 //function for work, break and reset 
function startWork(){
    var workTimer = num1 *60;
    workTimer--;
    $(".clockTitle").html("Work! Work! Work!");
    $(".clockTitle").css("color", "#ff6347");
    $(".btn-count").prop("disabled",true);
    startTimer(workTimer, $(".clocktime"));
    i = 0;
}
    
function startBreak(){
    var breakTimer = num2 *60;
    breakTimer--;
    $(".clockTitle").html("Enjoy a break :) ");
    $(".clockTitle").css("color", "#1e90ff");
    $(".btn-count").prop("disabled",true);
    startTimer(breakTimer, $(".clocktime"));
    i = 1;
}
   
 function resetClock(){
    $(".btn-count").prop("disabled",false);
    $(".clocktime").html("0:00");
    clearInterval(clock);
}

   $(".reset").click(function(){
     resetClock();
 });
    
});