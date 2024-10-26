//         *    4 spaces 1 star
//       * *    3 spaces 2 star
//     * * *    2 spaces 3 star
//   * * * *    1 spaces 4 star
// * * * * *    0 spaces 5 star
//   * * * *    1 spaces 4 star
//     * * *    2 spaces 3 star
//       * *    3 spaces 2 star
//         *    4 spaces 1 star 


function sandGlassStar(){
    let spaces;

    // upper part
    spaces=4
    for (let i = 1;  i<=5; i++) {
        let rows=" ".repeat(spaces)
            for (let j = 1;  j<=i; j++) {
                rows+="*"
            }
            console.log(rows)
            spaces--
    }

    // lower part
    spaces=1
    for (let i = 4; i >=1; i--) {
        let rows=" ".repeat(spaces)
            for (let j = i; j >=1; j--) {
                rows+="*"
            }
            console.log(rows)
            spaces++
    }
}
sandGlassStar()