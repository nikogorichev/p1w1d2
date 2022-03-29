function sum(arrayNumbers, sum = 0){
  for (let i = 0; i < arrayNumbers.length; i++ ){
    sum += arrayNumbers[i];
  }
  return sum
}

let arrayNumbers = [1,2,3]
console.log(arrayNumbers.reduce((acc, current) => {
  return current + acc
},0))
