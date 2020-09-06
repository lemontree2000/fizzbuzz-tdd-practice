import fizzBuzz from '../index'
describe('test fizzBuzz game', () => {
    test('当数包含3，应当返回Fizz', () => {
        expect(fizzBuzz(33)).toBe('Fizz')
    })

    test('当数是3的倍数，应当返回Fizz', () => {
        expect(fizzBuzz(6)).toBe('Fizz')
    })

    test('当数是5的倍数，应当返回Buzz', () => {
        expect(fizzBuzz(10)).toBe('Buzz')
    })

    test('当数是7的倍数， 应当返回Whizz', () => {
        expect(fizzBuzz(14)).toBe('Whizz')
    })

    test('当数是3和5的倍数，应当返回FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })

    test('当数是3和5和7的倍数，应当返回FizzBuzzWhizz', () => {
        expect(fizzBuzz(105)).toBe('FizzBuzzWhizz')
    })

    test('当数是5和7的倍数，应当返回BuzzWhizz', () => {
        expect(fizzBuzz(70)).toBe('BuzzWhizz')
    })
})
