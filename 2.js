// * * * * *
// * * * *
// * * *
// * *
// *


for (let i = 1; i <=5; i++) {
    let rows= " "
    for (let j = 5; j >=i; j--) {
        rows=rows+" *"
    }
    console.log(rows)
}


// * * * * * * * * *  // 1 row 9 star
// * * * * * * *      // 2 row 7 star
// * * * * *          // 3 row 5 star
// * * *              // 4 row 3 star 
// *                  // 5 row 1 star

function inverseRightTriangle(n){
    
    for (let i = 1; i <=5; i++) {
        let rows=" "
            for (let j= 1;j<=n; j++) {
                rows+="* "
            }
            console.log(rows)
        n-=2
    }
}
inverseRightTriangle(9)


