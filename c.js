// 12345
// 1234
// 123
// 12
// 1
// Inverted Right-Angled Triangle with Numbers
// Print an inverted right-angled triangle with numbers (e.g., for n = 5):

function rtNumber(n){
    // rows loop
    for (let i = n; i >=1; i--) {
        let rows=""
        // inner numbers loop
        for (let j = 1; j <=i; j++) {
            rows+=j
        }
        console.log(rows)
    }
}
rtNumber(5)