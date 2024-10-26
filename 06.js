  //          * 4 spaces 1 star
  //        * * 3 spaces 2 star
  //      * * * 2 spaces 3 star
  //    * * * * 1 spaces 4 star
  //  * * * * * 0 spaces 5 star



function rightTraingle(n){
  let spaces=5

  // It creates the rows with the spaces
  for (let i = 1; i <=n; i++) {
    let rows=" ".repeat(spaces-1)  // It creates the spaces with the help of repeat()
    spaces--

    for (let j = 1; j <=i; j++) {
      rows+="*"
    }
    console.log(rows)
  }
  rows=""
}
rightTraingle(5)