import fizzBuzz from '../index'

describe('test fizzBuzz game', () => {

    test('当输入包含3的数，返回Fizz', () => {
        const result = fizzBuzz(13)
        expect(result).toBe('Fizz')
    })
    test('当输入3的倍数，返回Fizz', () => {
        const result = fizzBuzz(6)
        expect(result).toBe('Fizz')
    })
    test('当输入5的倍数，返回Buzz', () => {
        const result = fizzBuzz(10)
        expect(result).toBe('Buzz')
    })
    test('当输入7的倍数，返回Whizz', () => {
        const result = fizzBuzz(14)
        expect(result).toBe('Whizz')
    })
    test('当输入3和7的倍数，返回FizzWhizz', () => {
        const result = fizzBuzz(21)
        expect(result).toBe('FizzWhizz')
    })
    test('当输入5和7的倍数，返回BuzzWhizz', () => {
        const result = fizzBuzz(70)
        expect(result).toBe('BuzzWhizz')
    })


})
