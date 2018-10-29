//Template Literals and Default Parameters Value

function favMovie(name = 'World', movie = 'The Room') {

    //template literal
    console.log(`My name is ${name} and my favorite movie is: ${movie}.`);

}

//passing in parameters so default parameters in the function are not used
favMovie('Paula', 'Halloween');


//passing no parameters so default parameters are used.
//favMovie();

//Arrow Functions

let ES6 = (name = 'World', movie = 'The Room') => {

    //template literal
    console.log(`My name is ${name} and my favorite movie is: ${movie}.`);

}

ES6('Jane', 'Lego Movie');

//Arrow Function with Concise body

let ES62 = (name = 'Joe', movie = 'The Room') => console.log(`My name is ${name} and my favorite movie is: ${movie}.`);
ES62('Jim', 'Taken');

//Arrow function usin split method
let getFirstName = (n) => {
    let fName = n.split(' ');
    console.log(fName[0]);


};

//Calling function and passing first and last name
getFirstName('John Doe');

//Arrow function using split method using concise body
let getFN = (x) => f = x.split(' ');

//Calling function and passing first and last name.  Console log the result.
getFN('Jane Smith');
console.log(f[0]);


//Concise body example
// shorthand 
//let add = (a, b) => a + b;

// equivalent to: 
let add = (a, b) => {
    return a + b;
};

//calling function and passing 5 and 4 and storing result in sum
let sum = add(5, 4);
console.log(sum);

//Arrow function with concise body shorthand and returned object literal 
let getResults = (c, d) => ({
    product: c * d,
    power: Math.pow(c, d)

});

//Calling function and passing 2 and 2 and storing result in answer
let answer = getResults(2, 2);
console.log(answer);

//arrow function test
let square = x => Math.pow(x, 2);
let sq = square(4);
console.log(sq)

//Arrow function with concise body shorthand and returned object literal 
let getAnswer = (f, g) => ({
    product: f * g,
    square: Math.pow(f, g)
});

//Calling function and passing 3 and 3 and storing result in answer
let calculation = getAnswer(3, 3);

//Log result with template literal
console.log(`${calculation.square}`);
console.log(`${calculation.product}`);

//SPREAD SYNTAX

//function with  3 parameters: name, location, favFood
function getDetails(name, location, favFood) {
    console.log(name + location + favFood);
}

//store array values in a variable
let details = ['Paula', 'Dallas', 'Pizza'];

//call the function spreading array in the variable
getDetails(...details);

//Create a variable that has a value of your name.
let first = 'Paula';

//Write a function that takes a parameter, name the parameter whatever you’d like.
function spreadFirst() {

    //Using spread syntax, create a variable in the function that takes the string you pass into the function and spreads it into an array.
    let chars = [...first];
    //Using a for loop, loop through the spread string and console log each value of the string.
    for (i = 0; i < chars.length; i++) {
        console.log(chars[i]);
    }
}

//call function to spread string into array
spreadFirst();


