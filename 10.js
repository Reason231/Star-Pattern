   // *****  // 0 spaces 5 stars
   // *   *  // 1 star 3 spaces 1 star
   // *   *  // 1 star 3 spaces 1 star
   // *   *  // 1 star 3 spaces 1 star
   // *****  // 0 spaces 5 stars
   // Hollow Square (Medium)

   // 1st method from my logic
   function hollowSquare(){
      for (let i = 1; i <=5; i++) {
         let spaces=3
         if(i==1 || i==5){
            let rows=""
            for (let j = 1; j<=5 ; j++) {
               rows+="*"
            }
            console.log(rows)
         }
         else{
            let rows="*"
            rows=rows+" ".repeat(spaces)
            rows+="*"
            console.log(rows)
         }
      }
   }
   hollowSquare()

   // 2nd Method
   function hollowSquare(size = 5) {
      const fullRow = "*".repeat(size); // Full row for top and bottom
      const hollowRow = "*" + " ".repeat(size - 2) + "*"; // Hollow row with spaces in between
  
      for (let i = 1; i <= size; i++) {
          if (i === 1 || i === size) {
              console.log(fullRow); // Print full row for first and last rows
          } else {
              console.log(hollowRow); // Print hollow row for middle rows
          }
      }
  }
  
  hollowSquare();
  