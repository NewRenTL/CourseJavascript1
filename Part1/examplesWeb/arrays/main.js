
let numbers = [1,2,3,4,5,6]
let sentences = ["Diego","Diana","Karen"]
show(numbers)
showDom('array1',numbers)
showDom('array2',sentences)

function show(arr)
{
    for (let i = 0; i < arr.length;i++)
    {
        console.log(arr[i])
    }
}

function showDom(element,arr)
{
    document.getElementById(element).innerHTML = "";
    for(let i = 0; i < arr.length;i++)
    {
        document.getElementById(element).innerHTML +=
        `<div>${arr[i]}</div>`
    }
}