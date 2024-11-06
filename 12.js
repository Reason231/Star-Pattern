    //    *
    //   * *
    //  *   *
    //   * *
    //    *
// Hollow Diamond (Hard)

function hollowDiamond() {
    const n = 5; // Number of rows (height of the diamond)
    const mid = Math.ceil(n / 2); // Middle row index

    // Upper part of the diamond
    for (let i = 1; i <= mid; i++) {
        let outerSpaces = " ".repeat(mid - i); // Leading spaces
        if (i === 1) {
            console.log(outerSpaces + "*"); // Top row (single star)
        } else {
            let innerSpaces = " ".repeat(2 * (i - 2) + 1); // Spaces inside the diamond
            console.log(outerSpaces + "*" + innerSpaces + "*");
        }
    }

    // Lower part of the diamond
    for (let i = mid - 1; i >= 1; i--) {
        let outerSpaces = " ".repeat(mid - i); // Leading spaces
        if (i === 1) {
            console.log(outerSpaces + "*"); // Bottom row (single star)
        } else {
            let innerSpaces = " ".repeat(2 * (i - 2) + 1); // Spaces inside the diamond
            console.log(outerSpaces + "*" + innerSpaces + "*");
        }
    }
}

hollowDiamond();
