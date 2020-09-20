import fizzBuzz from '../index'

describe('test fizzBuzz game', () => {
    test('当遇到包含3的数，报Fizz', () => {
        const result = fizzBuzz(13)
        expect(result).toBe('Fizz')
    })

    test('当遇到包含3的倍数，报Fizz', () => {
        const result = fizzBuzz(6)
        expect(result).toBe('Fizz')
    })
    
    test('当遇到包含5的倍数，报Buzz', () => {
        const result = fizzBuzz(10)
        expect(result).toBe('Buzz')
    })

    test('当遇到包含7的倍数，报Whizz', () => {
        const result = fizzBuzz(14)
        expect(result).toBe('Whizz')
    })

    test('当遇到包含3和5的倍数，报FizzBuzz', () => {
        const result = fizzBuzz(15)
        expect(result).toBe('FizzBuzz')
    })

    test('当遇到包含3和7的倍数，报FizzWhizz', () => {
        const result = fizzBuzz(21)
        expect(result).toBe('FizzWhizz')
    })

    test('当遇到包含5和7的倍数，报BuzzWhizz', () => {
        const result = fizzBuzz(70)
        expect(result).toBe('BuzzWhizz')
    })
    test('当遇到包含3和5和7的倍数，报FizzBuzzWhizz', () => {
        const result = fizzBuzz(105)
        expect(result).toBe('FizzBuzzWhizz')
    })
    test('当遇到不包含3和5和7的倍数，报原数', () => {
        const result = fizzBuzz(4)
        expect(result).toBe(4)
    })
    
    
})
