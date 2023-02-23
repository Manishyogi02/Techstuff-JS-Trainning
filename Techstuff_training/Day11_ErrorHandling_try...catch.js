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