// Работать это должно вот так:
// myForEach([1,2,3], (el) => console.log(el));
// const newArr = myMap([1,2,3], (el) => el * 2);

const arrExample = [8, -7, 3, 9, 8]
const arrStr = ['banan', 0, 'names', 'glasses', 96, true]

function myForEach(arr, func) {
  for (let elem of arr) {
    elem = func(elem)
  }
}

//console.log(myForEach(arrExample, (el) => console.log(el)))

function myMap(arr, func) {
  let newArr = []
  for (let elem of arr) {
    elem = func(elem)
    newArr.push(elem)
  }
  return newArr
}

// myMap(arrExample, (el) => console.log(el * 2))

function myFilter(arr, func) {
  let newArr = []
  for (let elem of arr) {
    if (func(elem)) {
      newArr.push(elem)
    }
  }
  return newArr
}
// console.log(myFilter(arrStr, (elem) => typeof elem === 'string'))

function myReduce(arr, func, acc = arr[0]) {
  let newArr = []
  if (acc === arr[0]) {
    for (let i = 1; i < arr.length; i++) {
      acc += func(arr[i])
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      acc += func(arr[i])
    }
  }
  newArr.push(acc)
  return newArr
}

// console.log(myReduce([2, 2, 2], elem => {
//   return
// }))

function myFind(arr, func) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(arr[i])
    }
    break
  }
  return newArr
}

// console.log(myFind(arrStr, (elem) => typeof elem === 'string'))


function myEvery(arr, func) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(arr[i])
    }
  } if (newArr.length === arr.length) {
    return true
  } else {return false}
}

// console.log(myEvery(arrExample, el => el > 0))

function mySome(arr, func) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(arr[i])
    }
  } if (newArr.length != 0) {
    return true
  } else {return false}
}

console.log(mySome(arrExample, el => el < 0))
