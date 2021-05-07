
var number = prompt("Enter some numbers!");
var x, reNumber = 0;
var y = number;
while(number > 0)
{
  x = number % 10;
  reNumber = reNumber * 10 + x;
  number = parseInt(number / 10);
}
alert(reNumber);