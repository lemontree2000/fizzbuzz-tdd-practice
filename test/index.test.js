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
    test('当输入3和5的倍数，返回FizzBuzz', () => {
        const result = fizzBuzz(15)
        expect(result).toBe('FizzBuzz')
    })
    test('当输入3和5和7的倍数，返回FizzBuzzWhizz', () => {
        const result = fizzBuzz(105)
        expect(result).toBe('FizzBuzzWhizz')
    })
    test('当输入不是3和5和7的倍数，返回自己', () => {
        const result = fizzBuzz(4)
        expect(result).toBe(4)
    })


})
