//JSON object
let myData = {
    'myName': 'Noorul',
    'myCity': 'Salem',
    'contact': 8870468660
}

//array object
let fruits = ['Apple', 'Orange', 'Papaya']

console.log(myData.myCity)
console.log(fruits)

//legacy function declaration
/*
function func_name(){
    body of the function
}
*/

//arrow function declaration
/*
let/const func_name = () =>{
    body of the function
}
*/

//parse() = str to JSON
let laptop = '{"model":"Dell", "RAM":16GB}'
console.log(JSON.parse(laptop))

//stringify() = JSON to str
var j = {
    "name": "Noorul"
}
console.log(JSON.stringify(j));

//map in array    map(value,key )
//filter in array    filter(value,key)
