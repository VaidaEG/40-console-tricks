// start with strings, numbers and booleans

// and we want to make a copy of it.

// You might think we can just do something like this:

// However what happens when we update that array?

// no here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way

// or create a new array and contact the old one in

// or use the new ES6 Spread

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Vaida EiGrau',
    age: 31
};

// and think we make a copy:

// how do we take a copy instead?

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. Lodash has a cloneDeep method, but should think twice before using it.