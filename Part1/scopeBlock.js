/*
Block Scope/ 

- The declared variables with "const" or "let" belongs to the "{}" block 
- We can only access them within the block
*/

const age = 19;

if(age >= 18)
{
    //Block
    const accessGranted = true;
    console.log(accessGranted)

    const myFunction = () =>
    {
        console.log(accessGranted)
    }
    myFunction()
}

// Error: You can't access to AccessGranted variable because the variable is within of block of the condition
// console.log(accessGranted)

