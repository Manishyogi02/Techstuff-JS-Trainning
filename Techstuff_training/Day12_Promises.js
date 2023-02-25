// 1.Create a function that returns array of employees from a random time from 1 to 2 seconds using promise chaining.
function getEmployees(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const employees = [
        {id:1,name:"Manish Yogi",age:23,salary:550000},
        {id:2,name:"Arnav Damle",age:23,salary:500000},
        {id:3,name:"Aayush Tapadia",age:2,salary:530000},         {id:4,name:"Sumit Paal",age:23,salary:480000},
        {id:5,name:"Sorab Dangi",age:24,salary:490000}
      ]
      resolve (employees)
    }, Math.floor(Math.random() * 1000) + 2000)
  })
}
getEmployees()
.then(employees =>console.log(employees))
.catch(error =>console.error(error))

// 2.Create another promisified function that sorts this employee list from above response by name. Chain it to above promise
// Define a function to sort the employee list by name
function sortByName(employees) {
  return new Promise((resolve, reject) => {
    if (!employees || !Array.isArray(employees)) {
      reject(new Error('Invalid employee list'));
    } else {
      employees.sort((a, b) => (a.name > b.name ? 1 : -1));
      resolve(employees);
    }
  });
}

// Call the getEmployees function and chain the sortByName function to it
getEmployees()
  .then(sortByName)
  .then((sortedEmployees) => {
    console.log('Sorted employees:', sortedEmployees);
  })
  .catch((error) => {
    console.error(error);
  });
