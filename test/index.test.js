import fizzBuzz from '../index'

describe('test FizzBuzz', () => {
    test('当包含3的数，应当返回Fizz', () => {
        expect(fizzBuzz(33)).toBe('Fizz')
    })

    test('当是3的倍数，应当返回Fizz', () => {
        expect(fizzBuzz(6)).toBe('Fizz')
    })

    test('当是5的倍数，应当返回Buzz', () => {
        expect(fizzBuzz(10)).toBe('Buzz')
    })

    test('当是7的倍数，应当返回Whizz', () => {
        expect(fizzBuzz(14)).toBe('Whizz')
    })

    test('当是3和5 的倍数，应当返回FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })

    test('当是3和5和7的倍数，应当返回FizzBuzzWhizz', () => {
        expect(fizzBuzz(105)).toBe('FizzBuzzWhizz')
    })

    test('当是5和7的倍数，应当返回BuzzWhizz', () => {
        expect(fizzBuzz(70)).toBe('BuzzWhizz')
    })
})
