//Pass in the number as a string 
let numString = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"

//Split the element of the string 
let stringSplit = numString.split('');

//Convert the string to an array of numbers 
let longArray = []
for ( var i = 0 ; i < stringSplit.length ; i++){
    let number = parseInt(stringSplit[i])
    longArray.push(number)
}

//Set up a comparison array that compares only  13 digits 
let comparisonArray = []
for (var i = 0 ; i < longArray.length ; i++){
    comparisonArray.push([longArray[i-6],longArray[i-5],longArray[i-4],longArray[i-3],
        longArray[i-2],longArray[i-1],longArray[i],longArray[i + 1],longArray[i + 2]
        ,longArray[i + 3],longArray[i + 4],longArray[i + 5],longArray[i + 6]])
}


//Set up an array that calculates the product of the 13 digits number 
let product = []
for ( var i = 0 ; i < comparisonArray.length ; i++){
    let totalArray = comparisonArray[i].reduce(function(a,b){return a*b})
    product.push([totalArray,comparisonArray[i]])
}

//Loop through the total array to get the largest product 
//100 is used as a test number, if the current iteration > 100 , set the test number = current iteration 
let testNumber = 100 
let finalArray = []
for ( var i = 0 ; i < product.length ; i++){
    if (product[i][0] > testNumber) {
        testNumber = product[i][0]
        finalArray = product[i]
    }
}

console.log(testNumber)
console.log(finalArray)