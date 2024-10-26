//    *
//   ***
//  *****
//   ***
//    *
// Diamond Pattern (Medium-Hard)

let spaces;
function diamondPattern(){
    
    // upper triangle
    spaces=5
    for (let i = 0; i <3; i++) {
        let rows=" ".repeat(spaces)
            for (let j = 1; j<=i*2+1; j++) {
            rows+="* "
        }
        console.log(rows)
        spaces-=2
    }

    // Lower traingle
    spaces=3
    for (let i = 2; i >0; i--) {
        let rows=" ".repeat(spaces)
            for (let j = 1; j<=i*2-1; j++) {
            rows+="* "
        }
        console.log(rows)
        spaces+=2
    }
}
diamondPattern()