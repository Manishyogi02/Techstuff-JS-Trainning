function getERmployee(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const employees = [
                {id:1,name:"Manish Yogi",age:23,salary:550000},
                {id:2,name:"Arnav Damle",age:23,salary:500000},
                {id:3,name:"Aayush Tapadia",age:2,salary:530000},
                {id:4,name:"Sumit Paal",age:23,salary:480000},
                {id:5,name:"Sorab Dangi",age:24,salary:490000}
            ]
        }, Math.floor(Math.random()* 1000) + 1000)
})
}
getERmployee()
.then(employees => console.log(employees))
.catch(error => console.error(error))