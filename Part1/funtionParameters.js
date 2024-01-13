const greet = (name1) =>{
    console.log(`Hello ${name1}`)
}


greet("Diego")

//Default Parameter

const greetDefault = (name1 = 'friend') =>
{
    console.log(`Hello ${name1}`)
}
greetDefault()
greetDefault("Anayeli")