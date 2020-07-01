//Create an array with a lenght less than 100
arrPythag = [];
for(var i = 0 ; i <= 1000 ; i++){
    arrPythag.push(i)
}

//Create a TRIPLE nested loops to compare the iteration of the three numbers  
// If the three compared value is the correct triplet then grab the number and store in the 'allTriplets'
let allTriplets = [];
for (var i = 1; i < arrPythag.length; i++) {
  for (var k = 1; k < arrPythag.length; k++) {
    for (var p = 1; p < arrPythag.length; p++) {
      let aSquared = Math.pow(arrPythag[i],2);
      let bSquared = Math.pow(arrPythag[k],2);
      let cSquared = Math.pow(arrPythag[p],2);

      if(aSquared + bSquared == cSquared && arrPythag[i] + arrPythag[k] + arrPythag[p] == 1000 && aSquared < bSquared) {
        allTriplets.push([arrPythag[i],arrPythag[k],arrPythag[p]]);
      }
    }
  }
}

console.log(allTriplets)

//Find the product 
product = allTriplets[0][0] * allTriplets[0][1] * allTriplets[0][2]

console.log(product)
