//1. Declare all the variables in above form without initialising and print their value.
let employeeeName;
let employeeeEmail;
let employeeeAge;
let employeeeAddress;
let employeeePhoneNumber;
let employeeeGender;
let employeeeMaritalStatus;
function Form() {
    console.log(employeeeName)
    console.log(employeeeEmail)
    console.log(employeeeAge)
    console.log(employeeeAddress)
    console.log(employeeePhoneNumber)
    console.log(employeeeGender)
    console.log(employeeeMaritalStatus)
}
Form()

//2. After printing their value assign them as null and print it again.
let employeeeName = null;
let employeeeEmail = null;
let employeeeAge = null;
let employeeeAddress = null;
let employeeePhoneNumber = null;
let employeeeGender = null;
let employeeeMaritalStatus = null;
function Form() {
    console.log(employeeeName)
    console.log(employeeeEmail)
    console.log(employeeeAge)
    console.log(employeeeAddress)
    console.log(employeeePhoneNumber)
    console.log(employeeeGender)
    console.log(employeeeMaritalStatus)
}
Form()

// 3. Declare an object called employeeDetails and add all the above variables to this object now as keys with value as null and print this object.
const employeeDetails = {
    "employeeName" : null,
    "employeeEmail" : null,
    "employeeAge" : null,
    "employeeAddress" : null,
    "employeePhoneNumber" : null,
    "employeeGender" : null,
    "employeeMaritialStatus" : null,
}
console.log(employeeDetails["employeeName"]),
console.log(employeeDetails["employeeEmail"]),
console.log(employeeDetails["employeeAge"]),
console.log(employeeDetails["employeeAddress"]),
console.log(employeeDetails["employeePhoneNumber"]),
console.log(employeeDetails["employeeGender"]),
console.log(employeeDetails["employeeMaritialStatus"])
