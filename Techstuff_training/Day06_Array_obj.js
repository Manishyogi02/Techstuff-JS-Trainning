const employees = [
    { name: 'Manish Yogi', email: "manishnathyogi333@gmail", age: 23, mobileNumber: 8349317060, address: "Ujjain M.P.", gender: "Male", maritialStatus: "Single" },
    { name: 'Rishi Solanki', email: "rishisolanki45@gmail", age: 55, mobileNumber: 8349569160, address: "Indore M.P.", gender: "Male", maritialStatus: "Married" },
    { name: 'Abhishekh Yogi', email: "abhishekyogi333@gmail", age: 28, mobileNumber: 1569873264, address: "Pune MH", gender: "Male", maritialStatus: "Single" },
    { name: 'Arnav Damle', email: "arnavdamle17@gmail", age: 59, mobileNumber: 8349311245, address: "Bharuch GJ", gender: "Male", maritialStatus: "Single" },
    { name: 'Aayush', email: "manishnathyogi333@gmail", age: 60,  mobileNumber: 8349396340, address: "Chennai", gender: "Male", maritialStatus: "Married" },
  ];
  
  // Filter the employees based on age
  const youngEmployees = employees.filter(employee => employee.age < 50);
  
  // Print the young employees
  console.log(youngEmployees);
  