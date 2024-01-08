/*
Logical operators
 && AND
 || OR
 ! NOT
*/

let age = 20;
let name1 = "Diego";
const accessAllowed1 = name1 == 'Diego' && age > 18; 
console.log(accessAllowed1)
const accessAllowed2 = name1 == 'Tamara' && age > 18; 
console.log(accessAllowed2)
const accessAllowed3 = name1 == 'Tamara' || age > 18;
console.log(accessAllowed3)
const accessAllowed4 = name1 == 'Diego' || age < 18;
console.log(accessAllowed4)

let valueInvert = true;
console.log(!valueInvert)