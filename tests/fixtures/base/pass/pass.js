
const noSemiColons = 'please'
console.log(noSemiColons)

const trailingCommasPlease = [
  1,
  2,
  3,
]

console.log(trailingCommasPlease)

{
  async function foo () {
    const myArray = [1, 2, 3]
    for (let somePromise of myArray) {
      let nonPromise = await somePromise
      console.log(nonPromise)
    }
  }

  foo()
}
