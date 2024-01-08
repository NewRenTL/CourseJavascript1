// Strings

const name1 = "Diego"
const paragraph =  "This is a 'paragraph'"
const paragraph2 = 'This is a "paragraph"'

// Numeric

const num = 4;
console.log(typeof(num))
const num2 = -4.123
console.log(typeof(num2))

//Boolean

const connectUser = false;
const greaterThan = 1>2;
console.log(greaterThan)
console.log(`${typeof(greaterThan)} ${greaterThan}`)

//Arrays

const matrix1  = [1,10,5];
const matrix2  = ['text',456,true,{ property :'value'},[1,2,3]]
console.log(matrix1)
console.log(matrix2)

//Object

const person = {
    name:'Diego',
    age:20,
    car:
    {
        brand: '...',
        color: 'black'
    }
};

//How do I access those values within the object?
console.log(person.name)
console.log(person['name'])
console.log(person.age)
console.log(person['age'])
console.log(person.car)
console.log(person['car'])
console.log(person['car']['color'])

// Null
// Null is often used to specify that a value is null
const nullVariable = null;

//Undefined
// Undefined is used to indicate that a value not is defined    
const undefinedVariable = undefined;

