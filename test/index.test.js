import fizzBuzz from '../index'
describe('test FizzBuzz Game', () => {
    test('当是包含3的数字时，应该返回Fizz', () => {
        expect(fizzBuzz('13')).toBe('Fizz')
    })

    test('当是3的倍数时，应该返回Fizz', () => {
        expect(fizzBuzz(6)).toBe('Fizz')
    })

    test('当是5的倍数是，应该返回Buzz', () => {
        expect(fizzBuzz(10)).toBe('Buzz')
    })

    test('当是7的倍数时，应该返回Whizz', () => {
        expect(fizzBuzz(49)).toBe('Whizz')
    })

    test('当是即是3的倍数也是5的倍数时，应该返回FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })

    test('当即是3的倍数也是5的倍数，且还是7的倍数时,应该返回FizzBuzzWhizz', () => {
        expect(fizzBuzz(105)).toBe('FizzBuzzWhizz')
    })

    test('当即是5的倍数也是7的倍时，应该返回BuzzWhizz', () => {
        expect(fizzBuzz(70)).toBe('BuzzWhizz')
    })

    test('当即是3的倍数也是7的倍数时，应该返回FizzWhizz', () => {
        expect(fizzBuzz(21)).toBe('FizzWhizz')
    })

})
