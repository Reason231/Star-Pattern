// *           1 row 1 star
// **          2 row 2 star
// * *         3 row 1 space 2 star
// *  *        4 row 2 space 2 star
// *****       5 row 5 star
// Hollow Right-Angled Triangle


function hollowRt(n){
    for (let i= 1;  i<=n;i++) {
        let rows="*"

        // It adds the spaces in the 3rd and 4th row
        if(i==3 || i==4){
            rows+=" ".repeat(i-2)+"*".repeat(1)
        }
        else{
            rows="*".repeat(i)
        }
    console.log(rows)
    }
}
hollowRt(5)


