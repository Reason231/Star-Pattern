// * * * * * 0 spaces 5 stars
//   * * * * 1 spaces  4 stars
//     * * * 2 spaces 3 stars
//       * * 3 spaces 2 stars
//         * 4 spaces 1 star

function inverseRightTriangle(stars){
  let spaces=0

  for (let i = 1; i <=stars; i++) {
    let rows=" ".repeat(spaces)
    spaces++
    for (let j = 5; j >=i; j--) {
      rows+="*"
    }
    console.log(rows)
  }
  rows=""
}
inverseRightTriangle(5)