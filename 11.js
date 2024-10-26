//     *      4 spaces 1 star
//    * *     3 spaces 2 star
//   *   *    2 spaces 1 star 2 spaces 1 star
//  * * * *   1 spaces 4 star

function hollowTriangle() {
    for (let i = 1; i <= 4; i++) {
        let outerSpaces = 4 - i;
        let stars = " ".repeat(outerSpaces);

        if (i === 1) {
            stars += "*";
        } else if (i === 2) {
            stars += "*" + " ".repeat(1) + "*";
        } else if (i === 3) {
            stars += "*" + " ".repeat(3) + "*";
        } else if (i === 4) {
            stars += "* ".repeat(4).trim(); // Four stars with a space in between
        }

        console.log(stars);
    }
}

hollowTriangle();



