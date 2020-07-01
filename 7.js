number = []

//Check if prime numbers
function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
    }


//Add prime number 
const addPrime = () => {
    for (let i = 2 ; i < Number.MAX_SAFE_INTEGER; i++){
        number.push(i)
    }
    return number
}    

//Call the function
addPrime()

//Filter the list 
const primeList = number.filter(isPrime)

console.log(primeList[10000])