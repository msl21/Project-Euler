// let triangularNum = [1];

// for ( var i = 2 ; i < 100 ; i++){
//    let nextNum =  triangularNum[triangularNum.length - 1 ]  + i;
//     triangularNum.push(nextNum);
// }

// console.log(triangularNum)


// // function division(x){
// //     for ( i = 1 ; i < 100 ; i++){
// //         if ( x % i == 0){
// //           let divisor = [];  
// //           divisor.push(i)  
// //         } else {
// //             continue;
// //         }
// //     }
// // }

// for ( triangularNum[0] ; triangularNum[triangularNum.length -1 ] ; triangularNum[i++]){
//     for ( j = 1 ; j < 100 ; j++ ){
//         if (triangularNum[i] % j == 0){
//             let factor = [];
//             factor.push(j);
//             if (factor.length == 5){
//                 break;
//             }
//         } else {continue}
//         return factor
//     }
// }

// console.log(factor)

function getFactors(number) {
    var factors = [];
  
    var possibleFactor = 1;
    var sqrt = Math.sqrt(number);
    while (possibleFactor <= sqrt) {
      if (number % possibleFactor == 0) {
        factors[factors.length] = possibleFactor;
  
        var otherPossibleFactor = number / possibleFactor;
        if (otherPossibleFactor > possibleFactor) {
          factors[factors.length] = otherPossibleFactor;
        }
      }
      possibleFactor++;
    }
  
    return factors;
  }
  
  function getTriangleNumberWithMoreThanNFactors(n) {
    var counter = 1;
    var triangleNumber = counter++;
    while (getFactors(triangleNumber).length < n) {
      triangleNumber += counter++;
    }
    return triangleNumber;
  }
  
  console.log(getTriangleNumberWithMoreThanNFactors(6));
  console.log(getTriangleNumberWithMoreThanNFactors(500));
  