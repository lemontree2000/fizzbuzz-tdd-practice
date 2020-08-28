import fizzBuzz from '../index'
describe('test FizzBuzz Game', () => {
    test('当输入数字包含3时，应该返回Fizz', () => {
        expect(fizzBuzz(23)).toBe('Fizz')
    })

    test('当输入数字时3的倍数时，应该返回Fizz', () => {
        expect(fizzBuzz(6)).toBe('Fizz')
    })

    test('当输入数字是5的倍数时，应该返回Buzz', () => {
        expect(fizzBuzz(10)).toBe('Buzz')
    })

    test('当输入数字时7的倍数时，应该返回Whizz', () => {
        expect(fizzBuzz(7)).toBe('Whizz')
    })

    test('当输入数字时3和5的倍数时，应该返回FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })

    test('当输入数字时3和5和7的倍数时， 应该返回FizzBuzzWhizz', () => {
        expect(fizzBuzz(105)).toBe('FizzBuzzWhizz')
    })

    test('当输入数字时5和7的倍数时，应该返回BuzzWhizz', () => {
        expect(fizzBuzz(70)).toBe('BuzzWhizz')
    })

})
