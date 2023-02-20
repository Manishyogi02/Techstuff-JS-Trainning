/* main.js 
// This is our main file, in this Js file we call above function and also JSON data
4th file */

const { getEmployeesWithNameContainingAM } = require('./Day09_JSONfunction');
const employees = require('./Day09_employees.json');

const employeesWithNameContainingAM = getEmployeesWithNameContainingAM(employees);

console.log(employeesWithNameContainingAM);
