 const { isEmpty, values, add, sum } = require("lodash")

//Q1
 const user={

 }
 user.name = "john"
 user.surname = "smith"
 user.name = "pete"
 delete user.name
 console.log(user)
 //Q2
 const users = {

 }
 let nova = isEmpty(users)
 console.log(nova)
//Q3
 let salaries = {
     John: 100,
     Ann: 160,
     Pete: 130
   }
  let hello  = Object.values(salaries).reduce((acc,curr)=>acc+curr , 0)
  console.log(hello)
//Q4

  let menu = {
     width: 200,
      height: 300,
      title: "My obj"
      
    };
  

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2; // Multiply the numeric property value by 2
    }
  }
}
let sol_2 = multiplyNumeric(menu)
console.log(sol_2)
//Q5

const obj_3 = {
  key1: 1,
  key2: 2,
  key3: 3,
  Task: function (param1,param2){
    console.log(param1*param2)

  }

}



