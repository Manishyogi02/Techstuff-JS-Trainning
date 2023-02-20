// main.js

const { getEmployeesWithNameContainingAM } = require('./Day09_JSONfunction');
const employees = require('./Day09_employees.json');

const employeesWithNameContainingAM = getEmployeesWithNameContainingAM(employees);

console.log(employeesWithNameContainingAM);
