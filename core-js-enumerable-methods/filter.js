let nums = [1, 2, 3, 4]
function oddNumbers(nums) {
  let odds = []
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] % 2) === 1) {
      odds.push(nums[i]);
    }
  }
  return odds
}

//console.log(nums.filter((el) => el % 2 === 1 ))


// /function longStrings(strings, minimumLength = 0){
//   let longs = []
//   for (let i = 0; i < strings.length; i++) {
//     if (strings[i].length >= minimumLength)
//     longs.push(strings[i])
//   }
//   return longs
// }
let strings = ['ggggf', 'hh', 'hghghgyt']
let minimumLength = 3
console.log(strings.filter((el) => el.length >= minimumLength))
