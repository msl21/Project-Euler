//FIND THE COUNT OF MULTIPLES OF 3 AND 5 BELOW 1000 

number = []

for (i= 1 ; i <1000 ; i++){
   if ( i%3 == 0 || i%5== 0){
       sum_number =  number.push(i)
   }
}

console.log(sum_number)

//Find the sum of the numbers
sumMultiples = number.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
})

console.log(sumMultiples)

