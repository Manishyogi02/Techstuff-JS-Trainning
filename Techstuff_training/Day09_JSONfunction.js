// 2. Add a function to return list of employees that contains "am" in his name. Add it in separate file and import it to call in another file.
function getEmployeesWithNameContainingAM(employees) {
    return employees.filter(employee => employee.name.includes('am'));
  }
  
  module.exports = {
    getEmployeesWithNameContainingAM
  };
  