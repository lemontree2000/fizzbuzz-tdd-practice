import fizzBuzz from '../index'

describe('test fizzBuzz game', () => {
    test('当输入包含3的数， 报Fizz', () => {
        const result = fizzBuzz(13)
        expect(result).toBe('Fizz')
    })

    test('当输入包含3的倍数， 报Fizz', () => {
        const result = fizzBuzz(6)
        expect(result).toBe('Fizz')
    })

    test('当输入包含5的倍数， 报Buzz', () => {
        const result = fizzBuzz(10)
        expect(result).toBe('Buzz')
    })

    test('当输入包含7的倍数， 报Whizz', () => {
        const result = fizzBuzz(14)
        expect(result).toBe('Whizz')
    })

    test('当输入包含5和3的倍数， 报FizzBuzz', () => {
        const result = fizzBuzz(15)
        expect(result).toBe('FizzBuzz')
    })

    test('当输入包含7和3的倍数， 报FizzWhizz', () => {
        const result = fizzBuzz(21)
        expect(result).toBe('FizzWhizz')
    })

    test('当输入包含7和5的倍数， 报BuzzWhizz', () => {
        const result = fizzBuzz(70)
        expect(result).toBe('BuzzWhizz')
    })

    test('当输入包含3和7和5的倍数， 报FizzBuzzWhizz', () => {
        const result = fizzBuzz(105)
        expect(result).toBe('FizzBuzzWhizz')
    })

    test('当输入不包含3和7和5的倍数， 报自己', () => {
        const result = fizzBuzz(4)
        expect(result).toBe(4)
    })
    
})
