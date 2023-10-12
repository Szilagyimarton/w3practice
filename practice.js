function stringSplosion(str){
  let result = ""
  for(let i = 0; i < str.length; i++){
    result += result +str[i+1]
  }
  return result
}
console.log(stringSplosion("code"))

/* let arr = [
  {name: "marton",
   age: 31,
},
{
  name:"viki",
  age: 31
}
]

let keys = ""
arr.forEach(function(name){
  keys += arr["name"]
}) 


console.log(keys) */