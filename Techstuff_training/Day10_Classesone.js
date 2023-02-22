class Employee{
  constructor(name, age, salary){
    this.name = name
    this.age = age
    this.salary = salary
  }

  getName(){
    return this.name
  }

  getAge(){
    return this.age
  }

  getSalary(){
    return this.salary
  }

  giveIncrement(increment){
    this.salary += increment
  }
  
}

const emp1 = new Employee("Manish Yogi",23,550000)
const emp2 = new Employee("Arnav Damle",22,500000)

console.log(emp1.getName())
console.log(emp2.getAge())

emp1.giveIncrement(50000)
console.log(emp1.getSalary())