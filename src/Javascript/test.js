//1:Closures 

// inner function memeioze outer function variable even if it is executed.
function outer (){
    let count =0 ;

    return function inner(){
        count++;
        console.log(count);
    }
}

const counter = outer();
counter();  // output: 1
counter();  // output: 2
counter();  // output: 3


//2:Var , let and const

// var is function scoped and can be re-declared and re-assigned.
var name = "Alice";
var name = "Bob"; // No error, name is re-declared
console.log(name); // Output: Bob

// let is block scoped and can be re-assigned but not re-declared in the same scope.
let age = 30;
age = 31; // Allowed, age is re-assigned
console.log(age); // Output: 31

// const is block scoped and cannot be re-assigned or re-declared.
const city = "New York";
console.log(city); // Output: New York


//3:Event loop 

console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 3000);

console.log("End");

// Output:
// Start
// End
// setTimeout (after 3 seconds)


//4:Promises vs Async await

//promises are API methods that return a promise which can be resolved or rejected.

//Promises example
fetch ('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
//async await example
async function fetchPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data); // Output: Post data
    } catch (error) {
        console.error(error); // Output: Error fetching post
    }
    
}
fetchPost();


//Hoisting 
//hoistng where variable and function declarations are moved to the top of their scope before code execution.
console.log(a)
var a = 10; // Output: undefined 

// scope has two types global scope and local scope. global scope is accessible anywhere in the code while local scope is only accessible within the function it is declared in.
// example of global scope
var globalVar = "I am global";      
function example() {
  console.log(globalVar); 
}   
// example of local scope
function example() {
  var localVar = "I am local";
  console.log(localVar); 
}
//Reverse string : used to reverse a string if "Hello" after reversing it will be "olleH" .
let str = "hello";

let reversed = str.split("").reverse().join("");

console.log(reversed);

//Find Duplicate in array
//  i dont know .

let arr = [1, 2, 3, 2, 4, 1];

let duplicates = arr.filter((item, index) => 
  arr.indexOf(item) !== index
);

console.log(duplicates);


//Debounce : debounce is used to set the delay time for a function to execute after the user stops typing .
let timer;

function debounce() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log("Debounce run");
  }, 1000);
}
debounce();
    
//Map function 

let users = [
  { name: "Ali" },
  { name: "Sara" }
];

let names = users.map(user => user.name);

console.log(names);

//api integration 
async function users() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getUsers();