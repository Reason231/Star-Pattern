//    *
//   ***
//  *****
//   ***
//    *
// Diamond Pattern (Medium-Hard)




function diamondPattern(){
    let spaces;

    // Lower triangle
    let upperStarCount=1
    for (let i = 1; i <=3; i++) {
        spaces=" ".repeat(3-i)+"*".repeat(upperStarCount)
        upperStarCount+=2
        console.log(spaces)
    }

    let lowerStarCount=3
    for (let i= 1;  i<=2; i++) {
        spaces=" ".repeat(i)+"*".repeat(lowerStarCount)
        lowerStarCount-=2
        console.log(spaces)
    }
}
diamondPattern()