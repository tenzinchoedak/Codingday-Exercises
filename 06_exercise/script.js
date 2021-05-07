const weekDay =new Array();
weekDay[1] = 'Sunday' ; 
weekDay[2] = 'Monday';
weekDay[3] = 'Tuesday';
weekDay[4] = 'Wednesday';
weekDay[5] = 'Thursday';
weekDay[6] = 'Friday';
weekDay[7] = 'Saturday';
let y = prompt("pleas enter a number from 1 to 7")
function returnDay(){
  if(y < 1 && y > 7) {
    return "error";
  } else {
    return weekDay[y];
  }
}