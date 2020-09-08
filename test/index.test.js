import fizzBuzz from '../index'

describe('test fizzBuzz Game', () => {
    test('当输入的数包含3，应当返回Fizz', () => {
        const result = fizzBuzz(33)
        expect(result).toBe('Fizz')
    })

    test('当输入的数是3的倍数， 应当返回Fizz', () => {
        const result = fizzBuzz(6)
        expect(result).toBe('Fizz')
    })

    test('当输入的数是5的倍数，应当返回Buzz', () => {
        const result = fizzBuzz(10)
        expect(result).toBe('Buzz')
    })

    test('当输入的数是7的倍数，应当返回Whizz', () => {
        const result = fizzBuzz(14)
        expect(result).toBe('Whizz')
    })

    test('当输入的数是3和5的倍数，应当返回FizzBuzz', () => {
        const result = fizzBuzz(15)
        expect(result).toBe('FizzBuzz')
    })

    test('当输入的数是3和5和7的倍数，应当返回FizzBuzzWhizz', () => {
        const result = fizzBuzz(105)
        expect(result).toBe('FizzBuzzWhizz')
    })

    test('当输入的数是5和7的倍数，应当返回BuzzWhizz', () => {
        const result = fizzBuzz(70)
        expect(result).toBe('BuzzWhizz')
    })

    test('当输入的数是3和7的倍数，应当返回FizzWhizz', () => {
        const result = fizzBuzz(21)
        expect(result).toBe('FizzWhizz')
    })

    test('当输入的数不是3和5和7的倍数，应当返回自身', () => {
        const result = fizzBuzz(4)
        expect(result).toBe(4)
    })

    


        

})

