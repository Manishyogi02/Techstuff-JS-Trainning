//1. Take two numbers and perform all the arithmetic operations over them.
let a = 10
let b = 2
console.log("a + b:-",a + b)
console.log("a - b:-",a - b)
console.log("a * b:-",a * b)
console.log("a / b:-",a / b)
console.log("a % b:-",a % b)
console.log("a ** b:-",a ** b)
console.log("++a:-", ++a)
console.log("++b:-", ++b)
console.log("a--:-", --a)
console.log("--b:-", --b)

//2. Take 2 numbers and 2 strings and perform addition operation on them in same sequence. 
let num1 = 10
let num2 = 20
let str1 = "is the Addition of  "
let str2 = "10 and 20 "
let Addtion = num1 + num2 + " "+str1 + str2
console.log(Addtion)

//3. Take 2 Strings and 2 numbers and perform addition operation on them in same sequence.
let str11 = 'TechStuff Date ' 
let str22 = 'of Incorporation is Dec '
let num11 = 5
let num22 = 2
console.log(str11 + str22  +(num11 + num22))

// 4. Write an operation to get its result as NaN. 
let opeAddition = NaN + 2
console.log(opeAddition)

/*5. Take 2 boolean variables as true and false and perform And and Or logical operation over them and print the 
result as well as operation. */
let isGreater = 10
let issmall = 11
console.log(isGreater < issmall)
console.log(issmall > issmall)
console.log(isGreater<issmall || isGreater==issmall)
console.log(isGreater<issmall && isGreater==issmall)

/*6. Take 2 variables and compare them using == and 
=== such that result of both the comparisons operation 
is not equal."*/
let objFirst = 100
let objSecond = '100'
console.log("objFirst == objSecond :-",objFirst == objSecond)
console.log("objFirst === objSecond :-", objFirst === objSecond)