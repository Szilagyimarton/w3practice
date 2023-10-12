 const array = ["kutya", "cica", "mérési hiba"]

const numbers = [10,20,30,40,50]

/* array.forEach((element) =>  console.log(element))

numbers.forEach(function(number, index, array){
  let newNumber = number *2 
  console.log(newNumber, index, array)
  return newNumber
})  */

const newNumbers = []

const mapResult = numbers.map((number) =>  number * 2)
/* console.log(numbers)
console.log(mapResult)
 */
const numberArray = [6,11,45,8,10,16,100]
const result = numberArray.filter(number =>  number % 2 !== 0)
console.log(result)

const users = [
  {
    name: "marton",
    age: 31,
    budget: 20000
  },
  {
    name: "viki",
    age:31,
    budget: 30000
  },

]
const usersWithHighBudget = users.filter(user => user.budget > 20000)
console.log(usersWithHighBudget)