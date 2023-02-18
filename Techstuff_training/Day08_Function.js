// 1. Create a function that takes a number and prints all even numbers upto that number
function printYoungEmployees(employees, ageThreshold) {
  employees.forEach(function(employee) {
    if (employee.age < ageThreshold) {
      console.log(`Name: ${employee.name}, Email: ${employee.email}, Age: ${employee.age}, Contact Number: ${employee.mobileNumber}, Address: ${employee.address},Gender: ${employee.gender}, Maritial Status: ${employee.maritialStatus}`);
    }
  });
}
const employees = [
  { name: 'Manish Yogi', email: "manishnathyogi333@gmail", age: 23, mobileNumber: 8349317060, address: "Ujjain M.P.", gender: "Male", maritialStatus: "Single" },
    { name: 'Rishi Solanki', email: "rishisolanki45@gmail", age: 55, mobileNumber: 8349569160, address: "Indore M.P.", gender: "Male", maritialStatus: "Married" },
    { name: 'Abhishekh Yogi', email: "abhishekyogi333@gmail", age: 28, mobileNumber: 1569873264, address: "Pune MH", gender: "Male", maritialStatus: "Single" },
    { name: 'Arnav Damle', email: "arnavdamle17@gmail", age: 59, mobileNumber: 8349311245, address: "Bharuch GJ", gender: "Male", maritialStatus: "Single" },
    { name: 'Aayush', email: "manishnathyogi333@gmail", age: 60,  mobileNumber: 8349396340, address: "Chennai", gender: "Male", maritialStatus: "Married" },
];
printYoungEmployees(employees, 30);

  
  // 2. Create a function that takes 2 parameter => an array of employees and age and returns all employees whose age is less than input age.
  function printEvenNumber(n){
    for (let i = 2; i<=n; i+=2){
      console.log(i)
  }
}
  let e = prompt("Enter any value :-")
  console.log(printEvenNumber(e))
