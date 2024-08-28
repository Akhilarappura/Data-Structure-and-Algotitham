


const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];

const fruitCount = {};

for (const fruit of fruits) {
    if (fruitCount[fruit]) {
        fruitCount[fruit] += 1;
    } else {
        fruitCount[fruit] = 1;
    }
}



console.log(fruitCount);
let maxCount = 0;
let maxFruit = '';

for (const [fruit, count] of Object.entries(fruitCount)) {
    if (count > maxCount) {
        maxCount = count;
        maxFruit = fruit;
    }
}

console.log(maxFruit); // Output: banana
