const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];

const fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(fruitCount);
// Output: { apple: 2, banana: 3, orange: 2 }

// Find the element with the highest count
let maxCount = 0;
let maxFruit = '';

for (const [fruit, count] of Object.entries(fruitCount)) {
    if (count > maxCount) {
        maxCount = count;
        maxFruit = fruit;
    }
}

console.log(maxFruit); // Output: banana
