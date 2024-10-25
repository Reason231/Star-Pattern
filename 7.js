// *********   9 stars 0 spaces
//  *******    7 stars 1 spaces
//  *****      5 stars 2 spaces
//   ***       3 stars 3 spaces
//    *        1 stars 4 spaces


function inversePyramid(n){
    let spaces=0
    for (let i = 1; i <=5; i++) {
        let rows=" ".repeat(spaces)
            for (let j = 1; j <=n; j++) {
                rows+="*"
            }
        console.log(rows)
        spaces++
        n-=2
    }
}
inversePyramid(9)