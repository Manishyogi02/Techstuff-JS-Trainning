// 1.Divide the employee age by null and handle the error. Also if the error occurs divide the age by 2 and print it.
let employeeAge = prompt("Enter Employee Age :- ")
try{
    let result = employeeAge / null;
    console.log(result)
}
catch(error){
    console.log("Error Occurred :- ", error)
    let result = employeeAge / 2;
    console.log("Resolve Error :-", result)
}
