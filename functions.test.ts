const {shuffleArray} = require('./utils')
const {array, arrCopy} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray should return an array', () => {
        expect(typeof shuffleArray()).toBe([])
    })
    test('shuffleArray should return an array as the same length as the array sent in', () => {
        expect(shuffleArray(arrCopy).length).toEqual(shuffleArray(array).length)
    })
})