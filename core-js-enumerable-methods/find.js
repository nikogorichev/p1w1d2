let letter = 'd'
let strings = ['gtr', 'dgtr', 'loi', 'ddde']

// function firstUnder(numbers, limit){
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] <= limit)
//     return numbers[i]
//   }
// }

// console.log(numbers.find((el) => el <= limit))

function startsWith(strings, letter){
  for (let i = 0; i < strings.length; i++) {
    if (strings[i][0] === letter)
    return strings[i]
  }
}

console.log(strings.find((el) => el[0] === letter))
