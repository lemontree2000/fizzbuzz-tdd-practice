import fizzBuzz from '../index'
describe('test FizzBuzz game', () => {
    test('当数包含3，应该返回Fizz', () => {
        expect(fizzBuzz(33)).toBe('Fizz')
    })
    test('当数为3和5的背时，应该返回FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })

    test('当数为3的倍数，应该返回Fizz', () => {
        expect(fizzBuzz(6)).toBe('Fizz')
    })

    test('当数为5的倍数，应该返回Buzz', () => {
        expect(fizzBuzz(10)).toBe('Buzz')
    })

    test('当数为7的倍数，应该返回Whizz', () => {
        expect(fizzBuzz(14)).toBe('Whizz')
    })

    test('当数为3和5和7的倍数，应该返回FizzBuzzWhizz', () => {
        expect(fizzBuzz(105)).toBe('FizzBuzzWhizz')
    })

    test('当数为5和7的倍数，应该返回BuzzWhizz', () => {
        expect(fizzBuzz(70)).toBe('BuzzWhizz')
    })


})
