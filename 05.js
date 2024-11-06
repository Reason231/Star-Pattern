// * * * * * 1 row 1 spaces 5 stars
//   * * * * 2 row 2 spaces 4 stars
//     * * * 3 row 3 spaces 3 stars
//       * * 4 row 4 spaces 2 stars
//         * 5 row 5 spaces 1 star

function inverseRight(n){
  let stars
  for (let i = 1; i <=5; i++) {
    spaces=" ".repeat(i)
    stars=spaces+"*".repeat(n-i)
    console.log(stars)
  }

}
inverseRight(6)