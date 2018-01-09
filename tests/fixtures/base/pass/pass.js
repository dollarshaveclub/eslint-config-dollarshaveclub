
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
    for (const somePromise of myArray) {
      const nonPromise = await somePromise
      console.log(nonPromise)
    }
  }

  foo()
}

let shouldBeLet = 'shouldBeLet'
shouldBeLet = 'is let'
console.log(shouldBeLet)
