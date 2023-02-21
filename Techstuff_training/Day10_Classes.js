class Employee {
    constructor(name, age, salary) {
      this.name = name;
      this.age = age;
      this.salary = salary;
    }
  
    static sortByName(employees) {
      return employees.sort((a, b) => a.name.localeCompare(b.name));
    }
  
    static sortByAge(employees) {
      return employees.sort((a, b) => a.age - b.age);
    }
  
    static sortBySalary(employees) {
      return employees.sort((a, b) => a.salary - b.salary);
    }
  
    static filterByAge(employees, minAge, maxAge) {
      return employees.filter((employee) => employee.age >= minAge && employee.age <= maxAge);
    }
  }

  // create some employees
const employees = [
    new Employee("Manish Yogi", 23, 500000),
    new Employee("Arnav Damle", 30, 550000),
    new Employee("Aayush Tapadia", 35, 560000),
    new Employee("Badal Verma", 40, 450000),
  ];
  
  // sort employees by name
  const employeesByName = Employee.sortByName(employees);
  console.log("Employees sorted by name:", employeesByName);
  
  // sort employees by age
  const employeesByAge = Employee.sortByAge(employees);
  console.log("Employees sorted by age:", employeesByAge);
  
  // sort employees by salary
  const employeesBySalary = Employee.sortBySalary(employees);
  console.log("Employees sorted by salary:", employeesBySalary);
  
  // filter employees by age
  const employeesFilteredByAge = Employee.filterByAge(employees, 20, 30);
  console.log("Employees filtered by age:", employeesFilteredByAge);
  