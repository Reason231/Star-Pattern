  //     *      4 spaces + 1 star + 4 spaces
  //    * *     3 spaces + 2 star + 3 space
  //   * * *    2 spaces + 3 star + 2 spaces
  //  * * * *   1 spaces + 4 star + 1 spaces
  // * * * * *  0 spaces + 5 star + 0 spaces


  function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        // It creates the rows with the left spacess
        let row = " ".repeat(n - i); // Add leading spaces
        for (let j = 1; j <= i; j++) {
            // It adds the stars with the right spaces
            row += "* "; // Add stars
        }
        console.log(row.trimEnd()); // Trim the trailing space for neatness
    }
}

pyramid(5);


