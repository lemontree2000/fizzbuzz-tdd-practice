import fizzBuzz from '../index'
describe('test FizzBuzz game', () => {
    test('输入包含3的数，应该返回Fizz', () => {
        expect(fizzBuzz(13)).toBe('Fizz')
    })

    test('输入3的倍数的数，应该返回Fizz', () => {
        expect(fizzBuzz(9)).toBe('Fizz')
    })


    test('输入5的倍数的数，应该返回Buzz', () => {
        expect(fizzBuzz(10)).toBe('Buzz')
    })

    test('输入7的倍数的数， 应该返回Whizz', () => {
        expect(fizzBuzz(14)).toBe('Whizz')
    })

    test('输入3和5的倍数的数，应该返回FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })

    test('输入3和5和7的倍数的数，应该返回FizzBuzzWhizz', () => {
        expect(fizzBuzz(105)).toBe('FizzBuzzWhizz')
    })

    test('输入5和7的倍数的数， 应该返回BuzzWhizz', () => {
        expect(fizzBuzz(70)).toBe('BuzzWhizz')
    })

})
