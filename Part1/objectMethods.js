
const user = 
{
    name:'Diego',
    age:20,
    friend:['Lesly','Paolo','Issac','Adrian'],
    greet: function ()
    {
        console.log("Hello bro")
    }
};

/*
//Own Methods:
    The objects can have methods
*/

user.greet();

/* 
//Object.keys()
It return an array with the keys of the object
*/

console.log(Object.keys(user))

/* 
// Object.values()
It return an array with the values of the object
*/

console.log(Object.values(user))

/* 
// Object.entries()
It return an array with the keys and values pairs of the object
*/

console.log(Object.entries(user))