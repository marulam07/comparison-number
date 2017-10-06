var firstNumber = 105;
var secondNumber = 10;

document.write("==================<br>")
document.write("LEVEL 0 Exercise <br>")
document.write("==================<br>")
document.write("First Number : " + firstNumber + "<br>")
document.write("Second Number  : " + secondNumber + "<br>")
document.write("==================<br>")

if (firstNumber > secondNumber) {
  document.write("First Number is bigger than the second number<br>")
} else {
  document.write("First Number is NOT bigger than the second number<br>")
}

var firstNumber = prompt("Please enter first number : ");
var secondNumber = prompt("Please enter second number : ");
var thirdNumber = prompt("Please enter third  number : ");

document.write("==================<br>")
document.write("LEVEL 1 Exercise <br>")
document.write("==================<br>")
document.write("First Number : " + firstNumber + "<br>")
document.write("Second Number  : " + secondNumber + "<br>")
document.write("Third Number  : " + thirdNumber + "<br>")
document.write("==================<br>")

switch (true) {
  case (firstNumber > secondNumber):
    document.write("... ")
  case ((firstNumber > secondNumber) && (firstNumber < thirdNumber)):
    {
      document.write("First number is bigger than the second number but smaller than the third number ")
    };
    break;
  case ((firstNumber > secondNumber) && (firstNumber > thirdNumber)):
    {
      document.write("First number is bigger than the second number and bigger than the third number ")
    };
    break;
  default:
    {
      document.write("Nonsense !!")
    };
    break;
}

/*
if ((firstNumber>secondNumber) && (firstNumber<thirdNumber))
  {document.write("First number is bigger than the second number but smaller than the third number ")}
else if ((firstNumber>secondNumber) && (firstNumber>thirdNumber))
  {document.write("First number is bigger than the second number and bigger than the third number ")}




switch (true) {
case (firstNumber>secondNumber) and (firstNumber>thirdNumber) :
  document.write("First Number is bigger than the second number and bigger than thirdNumber");
  break;
  case (firstNumber>secondNumber) and (firstNumber<thirdNumber):
    document.write("First Number is bigger than the second  number .. but not bigger than thirdNumber");
    break;
default:
}

if (firstNumber>secondNumber){
    document.write("First Number is bigger than the second number")
}else if (firstNumber>thirdNumber) {
  document.write("and First Number is bigger than the third number")
}else {
  document.write("but  First Number is NOT bigger than the third number")
}
else {
  document.write("First Number is NOT bigger than the second number .. cannot continue to the 3rd number")
}

*/
