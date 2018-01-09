const multiLineArrayLastBracket = [
  1,
  2,
  3 ]

const multiLineArrayFirstBracket = [
  1, 2, 3 ]

let x = 2

if (x === 3) {
  console.warn('foo')
} else if (multiLineArrayFirstBracket === multiLineArrayLastBracket) {
  console.warn('bar')
} else {
  if (x === 2) {
    console.warn('baz')
  }
}
