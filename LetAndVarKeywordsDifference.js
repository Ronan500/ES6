//Explore Difference between the var and let keyword..

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();


/*
  One of the biggest problems with declaring variables with
  the var keyword is that you can overwrite
  variable declarations without an error.

*/
