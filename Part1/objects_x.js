
const person = {
    name :"Diego",
    age:20,
    email:'diego.bustamante@utec.edu.pe',
    subscriptions:{
        web:true,
        email:true
    },
    favoriteColors: ['Black','White'],
    greet : function()
    {
        console.log('Hello!')
    }
}

console.log(person)
console.log(person['name'])
console.log(person['age'])
console.log(person['email'])