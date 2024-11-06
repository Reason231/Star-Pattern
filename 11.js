//     *      4 spaces 1 star
//    * *     3 spaces 2 star
//   *   *    2 spaces 1 star 2 spaces 1 star
//  * * * *   1 spaces 4 star


function hollowTriangle(height){
    for (let i = 1; i <=height; i++) {
        // It is for the outerSpaces
        let outerSpaces=height-i
        // First it logs the outerSpaces and the first row
        let stars=" ".repeat(outerSpaces)+"*"
        
        // Then it adds the stars after the spaces
        if(i>1 && i < height){
            stars+=" ".repeat(2*i-3)+"*"
        }

        // It prints the last one
        else if(i===height){
            stars="* ".repeat(height).trim()
        }
        console.log(stars)
    }
}
hollowTriangle(5);



