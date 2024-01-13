/*
Local variables
- They are declared variables within a function
- They can only be accessed from within a function where they were declared
*/

var number = 1;

var getNumberOfLetters = (name_1 = "Anonymous") =>
{
    var number = name_1.length;
    console.log(`${name_1} has ${number} letters`)

    var nestedFunction = () => 
    {
        console.log(number)
    }

    nestedFunction();
}

getNumberOfLetters("Diego")

//console.log(number)