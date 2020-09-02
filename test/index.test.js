import fizzBuzz from '../index'
describe('test FizzBuzz game', () => {
    test('当数字包含3时，应该返回Fizz', () => {
        expect(fizzBuzz(33)).toBe('Fizz')
    })

    test('当数字时3的倍数时，应该返回Fizz', () => {
        expect(fizzBuzz(9)).toBe('Fizz')
    })

    test('当数字时5的倍数时，应该返回Buzz', () => {
        expect(fizzBuzz(10)).toBe('Buzz')
    })

    test('当数字是7的倍数时，应该返回Whizz', () => {
        expect(fizzBuzz(14)).toBe('Whizz')
    })
    test('当数字时3和5的倍数时， 应该返回FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })

    test('当数字是3和5和7的倍数时，应该返回FizzBuzzWhizz', () => {
        expect(fizzBuzz(105)).toBe('FizzBuzzWhizz')
    })

    test('当数字时5和7的倍数时， 应该返回BuzzWhizz', () => {
        expect(fizzBuzz(70)).toBe('BuzzWhizz')
    })
})
