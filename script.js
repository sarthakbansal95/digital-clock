//declaring our function
function showTime(){
    var date = new Date();  //we do have acces to it because it is already defined in Web API
    var hours = date.getHours(); // 0 - 23
    var minutes = date.getMinutes(); // 0 - 59
    var seconds = date.getSeconds(); // 0 - 59
    var session = "AM";

   //for selection: we use if else statement 
   if(hours == 12 || hours > 12){
       session = "PM";
       if(hours > 12){
          hours = hours - 12; 
       }
   }      
    
   //Using Conditional(Ternary) Operator, here
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    //getting hold of all the data
    var time = hours + ":" + minutes + ":" + seconds + " " + session;
    
    //inserting the data using DOM
    document.getElementById("MyClockDisplay").textContent = time;
    
    //using setTimeout, so that function get called after every second
    setTimeout(showTime, 1000);   
}

//calling our function, otherwise it won't work
showTime();