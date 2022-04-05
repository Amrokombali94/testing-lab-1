const { returnTwo, 
    greeting, 
    add,
    multiply,
    divide,
    subtract} = require('./functions.js')


// test('returnTwo should return two', () => {
//     let returnedTwo = returnTwo()
//     expect (returnedTwo).toEqual(2)
// })
  
test('returnTwo should return int 2', () => expect(returnTwo()).toEqual(2))



test('greeting should return hello name', () => expect(greeting('James')).toEqual("Hello, James."))

test('greeting should return hello name', () => expect(greeting('Jill')).toEqual("Hello, Jill."))


describe('add test', () =>{
    test('add should return sum of two number', () => expect(add(1, 2)).toEqual(3))
    test('add should return sum of two number', () => expect(add(5, 9)).toEqual(14))
})

describe('multiply, divide and subtract tests',() => {
    test('multiply should return the multiplication of the two number', () => expect(multiply(5, 9)).toEqual(45))
    test('divide should return the result of dividing two number', () => expect(divide(45,5)).toEqual(9))
    test('subtract should return the subtraction of two number', () => expect(subtract(9, 4)).toEqual(5))
})


this.setState(st => ({
    nums: st.nums.filter(n => n !== num)   
}))