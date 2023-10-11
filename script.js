/* // Number methods

const randomNumber = Math.round(Math.random() * (100-1)+1)
console.log(randomNumber)

const numberInString = "12.7"
const number = parseInt(numberInString)
const float = parseFloat(numberInString)

console.log(number)
console.log(float)

console.log(isNaN(float)) 


// Array methods

let arr = [ "egy", "ketto", "harom"]

arr.push("negy", "ot")
//arr[10] = "negy"

/* const firsElement = arr.shift()
const lastElement = arr.pop()
 
console.log(arr)
console.log(firsElement)
console.log(lastElement) */


/* const spliceResult = arr.splice(2,2, "splice1","splice2") // hanyas index, hanyat, mit helyette

console.log(arr)
console.log(spliceResult)

let reverseArray = arr.reverse()
console.log(reverseArray) */
 

let arr = [ 1,21,3,444,56,1000]
console.log(arr.sort() )// ABC sorendbe rendezi)
console.log(arr.sort((a,b)=> a-b)) // Novekvo sorrendbe rendezi
console.log(arr.sort((a,b)=> b-a)) // Csokkeno sorrendbe rendezi

console.log(arr.join("-"))

//Object methods

let obj = {
  name: "marton",
  age: 31,
  favoriteDrink: "beer"
}

/*  for ( let i = 0; i < objectKeys.length; i++){
  console.log(objectKeys[i])
  console.log(obj[objectKeys[i]])
 } */

 for( const key of Object.keys(obj)){
    console.log(key)
    console.log(obj[key])  // object key iteralasnal[]hasznalando 
 }
