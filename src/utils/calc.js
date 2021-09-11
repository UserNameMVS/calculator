export const calc = (prev, operator, next) => {
  switch (operator) {
  case '+':
    return String(parseFloat(prev) + parseFloat(next))
  case '-':
    return String(parseFloat(prev) - parseFloat(next))
  case '*':
    return String(parseFloat(prev) * parseFloat(next))
  case '/':
    return String(parseFloat(prev) / parseFloat(next))
  default:
    return 0
  }
}

// const parseArr = (array) => {
//   let sum = 0
//   if (array.length > 1) {
//     const expressionArray = array.map((str, i, arr) => {
//       if ('*/'.includes(str)) {
//         return calc(arr[i - 1], str, arr[i + 1])
//       }
//     })
//   }
// }
const arr = ['2', '*', '5']

// const expressionArray = array.map((str, i, arr) => {
//   let sum = 0
//   if ('+-'.includes(arr[i + 1])) {
//     return str
//   } else if ('*/'.includes(str)) {
//     sum = calc(arr[i - 1], str, arr[i + 1])
//     return sum
//   }
// })

const result = []
for (let i = 0; i < arr.length; i++) {
  if ('+-'.includes(arr[i + 1])) {
    result.push(arr[i], arr[i + 1])
    i++
  } else if ('*/'.includes(arr[i + 1])) {
    result.push(calc(arr[i - 1], arr[i], arr[i + 1]))
    i += 2
  } else {
    result.push(arr[i])
  }
}
console.log('result', result)
