// 1. Take 2 numbers and print the smallest one amongst them
console.log("check the smallest number between num1 & num2")
let num1 = prompt("Enter First Number:-");
let num2 = prompt("Enter Second Number:-");
if (num1 < num2) {
  console.log(num1 + " is the smallest number.")
}
else {
  console.log(num2 + " is the smallest number.")
}

// 2. Take 3 numbers and print the biggest one amongst them
console.log("check the biggest number among numb1, numb2 ,and numb3")
let numb1 = prompt("Enter First Number:-");
let numb2 = prompt("Enter Second Number:-");
let numb3 = prompt("Enter Third Number:-");
if (numb1 > numb2 && numb1 > numb3) {
  console.log(numb1 + " is the biggest number.");
}
else if (numb2 > numb3 && numb2 > numb1) {
  console.log(numb2 + " is the biggest number.")
}
else if (numb3 > numb1 && numb3 > numb2) {
  console.log(numb3 + " is the biggest number")
}
//3. Use switch case to return a grade for the score, either "A", "B", "C", "D", or "F". (Take convension for numbers and grades by yourself) Anything below 50 is F
let Score = prompt("Enter Your Score:-")
switch (true) {
  case (Score >= 90):
    console.log('Grade = A')
    break;
  case (Score >= 80):
    console.log('Grade = B')
    break;
  case (Score >= 70):
    console.log('Grade = C')
    break;
  case (Score >= 60):
    console.log('Grade = D')
    break;
  case (Score >= 50):
    console.log('Grade = E')
    break;
  default:
    console.log('Grade = F')
}