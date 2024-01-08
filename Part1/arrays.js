function separation_lines()
{
    console.log("-----------------------------------------")
}

let number = [2,5,7,12,13,6,3]
console.log(`Array : ${number}`)
//Array length
separation_lines()
console.log("LENGTH:\n")

let length1 = number.length;
console.log(`Length of array: ${length1}`)


separation_lines()
console.log("ACCESS:\n")
//How do I access a position within an array?

//Brackets
console.log("Access by Brackets to elements of an array:")
console.log(`Position 0: ${number[0]} \nPosition 1: ${number[1]}\n`)
//"At" method with negative and positive range
console.log("Access by the'At' method:")
console.log(`Position -1: ${number.at(-1)} \nPosition -2: ${number.at(-2)}`)
console.log(`Position 0: ${number.at(0)} \nPosition 1: ${number.at(1)}`)
separation_lines()

//How can I loop through an array?
console.log("LOOP THROUGH:")

for(let i = 0 ; i < number.length;i++)
{
    console.log("Index: "+i)
}

separation_lines()
console.log("Mutable Methods:")
let animals = ["rabbit","bear","cow"]

//PUSH
//Mutable method of an array
console.log("Push <- bull")
//Add an element at the end of the array
animals.push("bull")
console.log(animals)

//UNSHIFT
//Add an element at the beginning of the array
console.log("Shift <- eagle")
animals.unshift("eagle")
console.log(animals)

//POP
//Remove an element from the end of the array
console.log("Pop:")
animals.pop();
console.log(animals)

//SHIFT
//Remove an element from the beginning of the array
console.log("Shift:")
animals.shift()
console.log(animals)

//SPLICE:
/* 
first parameter : Start Index
second parameter: Number of elements to delete
third parameter: Elements to insert in the indicated position after deleting elements
*/
console.log("Splice: (1,0,...['turtle','butterfly'])")
animals.splice(1,0,...['turtle','butterfly'])
console.log(animals)



//How i can delete an element of an array?
//For example: I can delete the element at index 3
console.log("How i can delete an element at an index of an array? Example: index 3 \nForm: array.slice(0,indexDelete).concat(array.slice(indexDelete+1))")
let arrayWithoutElement = animals.slice(0,3).concat(animals.slice(3+1));
console.log(animals)
console.log(arrayWithoutElement)

separation_lines()
console.log("Immutable Methods:")

//CONCAT:
/*Join 2 arrays */
console.log("Concat: array1.concat(array2)")
let newArrObjects = ["Laptop","Computer","Pencil","Pen","Book"]
let concatArray = animals.concat(newArrObjects.slice())
console.log(concatArray)

//SLICE
/* 
The slice() method of Array instances returns a shallow copy of a 
portion of an array into a new array object selected from start to end
first parameter: Start Index
Second parameter: End Index(but not including end)
*/
console.log("Slice: (0,array.length-1)")
let copyShallowArray = animals.slice(0,animals.length-1)
console.log(copyShallowArray)

//INDEXOF:
/*Find the position of an element*/
console.log("IndexOf:")
console.log(animals)
let findElement = animals.indexOf('butterfly')
console.log("Butterfly: Index "+ findElement)



