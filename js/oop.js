const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */

/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */


// STEP 2a: Rewrite the function using constructor functions


// STEP 2b: Create a couple of different people and invoke the greeting method


// STEP 3a: Complete the Person constructor


// STEP 3b: Instantiate a new Person

// STEP 3c: Access various properties of person1


// STEP 4b: Add properties and methods to the car object


// STEP 4c: Change properties and invoke methods of car


// STEP 5b: Output the brand property of anotherCar


// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too

function createHamburger(options) {
    // Default options
    const defaultOptions = {
        bun: 'sesame seed bun',
        vegetables: [],
        cheeses: [],
        sauces: [],
        patties: ['beef'],
        pattyCount: 1,
        toppings: []
    };

    // Merge default options with provided options
    const hamburger = { ...defaultOptions, ...options };

    // Function to generate description sentence
    hamburger.describe = function() {
        let description = `A delicious hamburger with ${this.pattyCount} ${this.pattyCount > 1 ? 'patties' : 'patty'} made of ${this.patties.join(', ')}, served on a ${this.bun}`;

        if (this.vegetables.length > 0) {
            description += `, topped with ${this.vegetables.join(', ')}`;
        }

        if (this.cheeses.length > 0) {
            description += `, covered with ${this.cheeses.join(', ')} cheese`;
        }

        if (this.sauces.length > 0) {
            description += `, drizzled with ${this.sauces.join(', ')} sauce`;
        }

        if (this.toppings.length > 0) {
            description += `, garnished with ${this.toppings.join(', ')}`;
        }

        description += '. Enjoy!';
        return description;
    };

    return hamburger;
}

// Example usage:
const myHamburger = createHamburger({
    bun: 'whole wheat bun',
    vegetables: ['lettuce', 'tomato', 'onion'],
    cheeses: ['cheddar'],
    sauces: ['barbecue'],
    patties: ['beef', 'chicken'],
    pattyCount: 2,
    toppings: ['pickles', 'jalapenos']
});

console.log(myHamburger.describe());


// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS