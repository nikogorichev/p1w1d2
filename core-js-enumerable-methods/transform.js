let strings = ['hello', 'window','book']

// function exclamations(strings){
//   let loudStrings = []
//   for (let i = 0; i < strings.length; i++) {
//   loudStrings.push(strings[i].toUpperCase() + '!')
//   }
//   return loudStrings
// }
 console.log(strings.map((el) => el.toUpperCase() + '!'))

function squareAll(numbers){
  let squares = []
  for (let i = 0; i < numbers.length; i++) {
    squares.push(numbers[i]**2)
  }
  return squares
}
let numbers = [1, 2, 3]
console.log(numbers.map((el) => el ** 2))

function firstLetters(words){
  let letters = []
  for (let i = 0; i < words.length; i++) {
     letters.push(words[i][0])
  }
  return letters
}

let words = ['ffdf','ffkii']
console.log(words.map((el) => el[0]))
