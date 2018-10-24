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

