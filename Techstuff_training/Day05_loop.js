//1. Find sum of first 10 natural numbers.
let sum = 0
//let n = prompt("Enter any number :-") 
console.log("Sum of first 10 natural numbers is :- ")
for (let i = 1; i < 11; i++) {
  sum += i+1
}
console.log(sum)
//console.log("sum of first " + n + " natural number is  " + sum)

// 2. Print Fibonacci Series upto first 10 numbers.
console.log("Fabinocci Series of 10 number")
let n1 = 0, n2 = 1, nextTerm
for(let i = 0; i < 10; i++){
    console.log(n1)
    nextTerm = n1 + n2
    n1 = n2
    n2 = nextTerm
}

//3. 3. Print all the keys and values of employee object used in first problem
let obj ={
    employeeName: "Manish Yogi",
    employeeEmail: "manishnathyogi333@gmail.com",
    employeeAge: "22",
    employeeMobileNumber: "+91 8349317060",
    employeeAddress: "Ujjain M.P.",
    employeeGender: "Male",
    employeeIsMerried: "No"
}
for (let a in obj){
    console.log(a + " : " +obj[a])
}
