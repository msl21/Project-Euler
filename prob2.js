//FIND THE SUM OF EVEN NUMBERS OF FIRST 4 MILLION OF FIBONACCI SEQUENCE

Fibo = [1,2]

//Create Fibonacci sequence array by looping and adding the next number
for (i = 0 ; i < 40000000 ; i++){
    const AddFibo = () => {
        newSum = Fibo[Fibo.length -1] + Fibo[Fibo.length - 2]
        Fibonacci = Fibo.push(newSum)
}
AddFibo()
}
    
//Filter the sequence to even numbers only 
function isEven(value){
    return  value % 2 == 0
}

Even_Fibo = Fibo.filter(isEven)

// Find the sum of the even numbers
Sum_Even = Even_Fibo.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
})

console.log(Sum_Even)
