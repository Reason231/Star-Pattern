  //     *      1 row,  4 spaces + 1 star
  //    * *     2 row,  3 spaces + 2 star 
  //   * * *    3 row,  2 spaces + 3 star 
  //  * * * *   4 row,  1 spaces + 4 star 
  // * * * * *  5 row,  0 spaces + 5 star 


function pyramid(){
    let stars;
    let outerSpaces;
    for (let i = 1; i <= 5; i++) {
        outerSpaces=" ".repeat(5-i)
        stars=outerSpaces+"* ".repeat(i)
        console.log(stars)
    }
}
pyramid()




