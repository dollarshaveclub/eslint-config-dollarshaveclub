
const noSemiColons = 'please'
console.warn(noSemiColons)

const trailingCommasPlease = [
  1,
  2,
  3,
]

console.warn(trailingCommasPlease)

{
  async function foo () {
    const myArray = [1, 2, 3]
    for (const somePromise of myArray) {
      const nonPromise = await somePromise
      console.warn(nonPromise)
    }
  }

  foo()
}

let shouldBeLet = 'shouldBeLet'
shouldBeLet = 'is let'
console.warn(shouldBeLet)
