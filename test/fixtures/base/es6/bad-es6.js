'use strict';

function fnWithRest() {
    console.log(arguments);
}

fnWithRest();

// -------------------------------------------------

const arr = [1, 2, 3];

Math.max.apply(Math, arr);

// -------------------------------------------------

const name = 'Rui';
const hello = 'Hello ' + name;

console.log(hello);
