
import { separation_lines } from "./myFunctionsSep.js"
//Dictionaries
console.log("Dictionaries:")
let myDictionary = {key1:'value1',key2:'value2',key3:'value3'}
console.log(myDictionary)
console.log(myDictionary['key1'])

separation_lines()
//Sets
console.log("Sets:")
let myFirstSet  = new Set()
//Add elements to myFirstSet
myFirstSet.add('element1')
myFirstSet.add('element2')
myFirstSet.add('element3')
console.log(myFirstSet)
//A Set can't add repeated elements
myFirstSet.add('element1')
console.log(myFirstSet)

//How do I check whether an element is in the set?
console.log(myFirstSet.has('element1'))
