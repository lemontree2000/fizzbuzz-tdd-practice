import fizzBuzz from '../index'
describe('test FizzBuzz Game', () => {
    test('当输入包含3的数字时，应该返回Fizz', () => {
        expect(fizzBuzz(13)).toBe('Fizz')
    })
    test('当输入3的倍数的数字时,应该返回Fizz', () => {
        expect(fizzBuzz(9)).toBe('Fizz')
    })

    test('当输入5的倍数的数字时，应该返回Buzz', () => {
        expect(fizzBuzz(10)).toBe('Buzz')
    })

    test('当输入7的倍数的数字时， 应该返回Whizz', () => {
        expect(fizzBuzz(14)).toBe('Whizz')
    })
    test('当输入3的倍数且5的倍数的上海， 应该返回FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })

    test('当输入3的倍数且时5的倍数和7的倍数的时候，应该返回FizzBuzzWhizz', () => {
        expect(fizzBuzz(105)).toBe('FizzBuzzWhizz')
    })

    test('当输入5的倍数且时7的倍数的时候，应该返回BuzzWhizz', () => {
        expect(fizzBuzz(70)).toBe('BuzzWhizz')
    })
})
