//Find the largest palindrome made from the product of two 3-digit numbers.

threeDigitProduct = [];

//Array of products of two 3 digits number
for (i = 100 ; i <= 999 ; i++){
    for (j = 100 ; j <= 999 ; j++){
    threeDigitProduct.push(i * j)
    }   
}


//Check whether the number is palindrome or not 
const isPalindrome = x => {
    if (x < 0) return false  //palindrome number cannot be negative  

    let reversed = 0 , y = x  // reversed is the reversed version of the number , y is a copy of x
    
    while (y > 0) {
        const lastDigit = y % 10 ;                
        reversed = (reversed * 10)   + lastDigit
        y = (y / 10 ) | 0 
    }

    return x===reversed
}

palindrome = threeDigitProduct.filter(isPalindrome)

console.log(palindrome[palindrome.length -1 ])
