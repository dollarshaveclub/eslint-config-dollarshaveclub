const multiLineArray = [
  1,
  2,
  3,
]

const singleLineArray = [ 1, 2, 3 ]

let x = 2
x = 3

if (x === 3) {
  console.log('foo')
} else if (x === 2) {
  console.log('bar')
} else if (multiLineArray === singleLineArray) {
  console.log('baz')
}
