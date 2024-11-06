  //          * 4 spaces 1 star
  //        * * 3 spaces 2 star
  //      * * * 2 spaces 3 star
  //    * * * * 1 spaces 4 star
  //  * * * * * 0 spaces 5 star


function rightTraingle(n){
  let star;
  let spaces;
  for (let i = 1; i <=n; i++) {
    star="*".repeat(i)
    spaces=" ".repeat(n-i)+star
    console.log(spaces)
  }
}
rightTraingle(5)

