//What is the largest prime factor of the number 600851475143 ?


factor = [];
number = 600851475143;

for (i = 0 ; i < 600851475143; i++){
    if (number % i == 0) {
        factor.push(i)
    }
}

//console.log(factor)

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

even_factor = factor.filter(isPrime)

console.log(even_factor[even_factor.length -1])    