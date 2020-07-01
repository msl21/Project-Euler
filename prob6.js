const square = [] ;
const naturalNum = []

// Make an array of square of natural numbers
function addSquare(n) {
    for(i = 1 ; i <= n ; i++){
       square.push(i**2)
    }
}

// Array of natural numbers squared 
function addNatural(n){
    for(i = 1 ; i <= n ; i++){
        naturalNum.push(i)
    }
}

//Invoke both functions
addSquare(10)
addNatural(10)

//Add the square of natural numbers 
sumSquare = square.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
})

//Add the natural numbers square 
sumNatural = naturalNum.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
})



//Output the difference 
console.log(sumNatural**2 - sumSquare)


