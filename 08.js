// *********   1 row 9 stars 0 spaces
//  *******    2 row 7 stars 1 spaces
//  *****      3 row 5 stars 2 spaces
//   ***       4 row 3 stars 3 spaces
//    *        5 row 1 stars 4 spaces



function inversePyramid(a){
    let spaces;
    let stars=a
    let rows;
    for (let i = 1; i <=5; i++) {
        spaces=i-1
        rows=" ".repeat(spaces)+"*".repeat(stars)
        stars=stars-2
        console.log(rows)
    }
}
inversePyramid(9)



