// A
// AB
// ABC
// ABCD
// ABCDE
// Alphabet Pattern (Medium-Hard)


function printAlphabetPattern(n) {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Use a string for all letters

    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += alpha[j];
        }
        console.log(row);
    }
}

// Call the function with a parameter to specify the number of rows
printAlphabetPattern(5);