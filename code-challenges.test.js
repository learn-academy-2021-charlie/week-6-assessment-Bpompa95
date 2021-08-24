// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { test } = require("jest-circus")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("nameCapitalized", () => { 
  test("returns an array with a sentence about each person with their names capitalized", () => {
var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]

expect(nameCapitalized(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."])

   })
  })
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]


// made the test fail
// my function will be nameCapitilzed into array
// iteration  map to get access to each object
// use the key to access the name value: split string and uppercase, substring and join
// string iterpolation with object




// b) Create the function that makes the test pass.
const nameCapitalized  = (array) => {
  return array.map(object => {
    let name = object.name.split(" ").map(string => `${string[0].toUpperCase()}${string.substring(1)}`).join(" ")
    return `${name} is a ${object.occupation}.`
  })
}



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("divideBy", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(divideBy(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(divideBy(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// made the test fail
// my function is called divideBy 
// my parameter is array 
// for my return filter typeof the map for value modulo 3


// b) Create the function that makes the test pass.

const divideBy = (array) => {
  return array.filter(value => typeof value === "number").map(value => value % 3)
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("Halloween", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    var cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    var cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(Halloween(cubeAndSum1)).toEqual(99)
    expect(Halloween(cubeAndSum2)).toEqual(1125)
  })
})

// test failed
// function name Halloween 
// parameter is array
// return reduce()
// exponentiation to 3


// b) Create the function that makes the test pass.

const Halloween = (array) => {
  return array.reduce((previousValue, currentValue) => previousValue + currentValue ** 3, 0)
}