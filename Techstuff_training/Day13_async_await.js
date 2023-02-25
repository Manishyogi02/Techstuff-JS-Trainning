async function getEmployees(){
    return await new Promise((resolve, reject) =>{
      setTimeout(() =>{
        const employees = [
          {id : 1, name : "Manish Yogi", salary : "550000"},
          {id : 2, name : "Arnav Damle", salary : "450000"},
          {id : 3, name : "Aayush Tapadia", salary : "490000"},
          {id : 4, name : "Sumit Paal", salary : "480000"},
          {id : 5, name : "Rajeev Anjana", salary : "540000"},
        ]
        resolve(employees)
      }, Math.floor(Math.random() * 1000) + 2000)
    })
  }
  (async function() {
    console.log("Welcome To TechStuff Pvt Ltd. Employee's Data :-")
    console.log("Fatching Employees's Data Please Wait...")
    const employees = await getEmployees();
    console.log(employees); 
    console.log("Fatched Employee's Data.")
  })();