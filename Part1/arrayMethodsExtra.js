
let colors = ["black","blue","red","yellow"]

/*
Method: Join
It allows us to transform an array to a string and separated each element with a character
*/

let join1 = colors.join('-')
console.log(join1)

/* 
Method: sort
It allows us to sort an array 
*/
let letters = ['c','m','e','a','z']
console.log(letters.sort((a,b)=> b.localeCompare(a))) // Descendant
console.log(letters.sort((a,b) => a.localeCompare(b))) // Ascendant

/*
Method: Reverse()
It allows us to invert an array
*/
let animals =  ['cat','butterfly','cow','sheep','bird']
console.log(animals.reverse())

/*
Method: Concat()
It allows us to join 2 arrays into 1 single array
*/ 

let animals1 = ['cat','butterfly']
let animals2 = ['eagle','bird']
console.log(animals1.concat(animals2))

/* 
Method: indexOf()
It'll give us the first index of an element
*/
let number_x1 = [1,6,2,1,8,10]
console.log(number_x1.indexOf(1))
console.log(number_x1.indexOf(2))
/* 
Method: lastindexOf()
It'll give us the lasts index of an element
*/
let number_x2 = number_x1.slice(0,number_x1.length)
console.log(number_x1.lastIndexOf(1))

/* 
    Method:forEach()
    It allows us execute a function for each element
*/

let number_x3 = number_x1.slice(0,number_x1.length);

number_x3.forEach((number_x,index) => {
    console.log(`Number ${number_x} Index (${index})`)
})

/* 
    Method: find()
    It'll return the first value that satisfied the condition of a function
*/

let number_result = (number_x1.slice(0,number_x1.length)).find((element) =>{
    if(element === 8)
    {
        return element;
    }
})

console.log(number_result)

/* 
    Method: every()
    It allows us execute a conditional for each element and will return true if all elements meet a condition
*/

let person_names = ["Diego","Diana","Tamara","Lesly","Dayana","Elisa","Micaela",3]

const allAreStrings = person_names.every((name_parameter)=>
{
    if( typeof name_parameter == 'string')
    {
        return true;
    }
    return false;
})
console.log(allAreStrings)

/* 
    Method: some()
    It allows us execute a conditional for each element and will return true if some element meet a condition
*/

const anyIsNumber = person_names.some((name_parameter)=>
{
    if(typeof name_parameter == "number")
    {
        return true
    }
    return false;
})

console.log(anyIsNumber)