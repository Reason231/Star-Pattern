
//  *              1 row 1 star
//  *  *           2 row 2 star
//  *  *  *        3 row 3 star
//  *  *  *  *     4 row 4 star
//  *  *  *  *  *  5 row 5 star


for (let i = 1; i <=5; i++) {
    let rows=" "   // Reset rows for each row
    for (let j = 1; j <= i; j++) {
        rows=rows+" * "
    }
    console.log(rows)
}


//  *                       1 row 1 star
//  *  *  *                 2 row 3 star
//  *  *  *  *  *           3 row 5 star
//  *  *  *  *  * * *       4 row 7 star
//  *  *  *  *  * * * * *   5 row 9 star

function rightTriangle(n){
    // It makes rows
    for (let i = 1; i <=5; i++) {
        let rows=""
        // It prints stars until the condtion meets
        for (let j = 1; j <=n ; j++) {
            rows+="* "
        }
        console.log(rows)
        n+=2
    }
}
rightTriangle(1)
