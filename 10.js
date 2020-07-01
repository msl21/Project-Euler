
function primesummation(n){
    let prime = []
    for (let i = 2 ; i < n ; i++){
      if (isPrime(i)){
        prime.push(i)
      }
    }
    return prime.reduce((a,b) => a + b)


    function isPrime(num) {
      for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
      return num > 1;
    }
}

console.log(primesummation(2000000))