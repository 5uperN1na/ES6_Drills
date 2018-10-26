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


let getFirstName = (n = 'Paula Suarez') => {
    let fName = n.split(' ');
    return fName[0];
    console.log(fName[0]);
}

getFirstName();


//Concise body example
// shorthand 
//let add = (a, b) => a + b;

// equivalent to: 
let add = (a, b) => {
    return a + b;
};
let sum = add(5, 4);
console.log(sum);



