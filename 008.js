//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// Rhombus Pattern
// Print a rhombus with asterisks (*) of size n (e.g., for n = 5):



function rhombusPattern(n) {
    // Upper part
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(n - i - 1) + "*".repeat(2 * i + 1));
    }

    // Lower part
    for (let i = n - 2; i >= 0; i--) {
        console.log(" ".repeat(n - i - 1) + "*".repeat(2 * i + 1));
    }
}

rhombusPattern(5);


