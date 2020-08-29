import fizzBuzz from '../index'
describe('test FuzzBuzz Game', () => {
    test('当输入数字包含3时，应该返回Fizz', () => {
        expect(fizzBuzz(33)).toBe('Fizz')
    })

    test('当输入数字时3的倍数时，应该返回Fizz', () => {
        expect(fizzBuzz(6)).toBe('Fizz')
    })


    test('当输入数字是5的倍数是， 应该返回Buzz', () => {
        expect(fizzBuzz(10)).toBe('Buzz')
    })

    test('当输入数字是7的倍数时，应该返回Whizz', () => {
        expect(fizzBuzz(14)).toBe('Whizz')
    })

    test('当输入数字时3和5的倍数时，应该返回FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })

    test('当输入数字时3和5和7的倍数时，应该返回FizzBuzzWhizz', () => {
        expect(fizzBuzz(105)).toBe('FizzBuzzWhizz')
    })

    test('当输入数字是5和7 的倍数时，应该返回BuzzWhizz', () => {
        expect(fizzBuzz(70)).toBe('BuzzWhizz')
    })

})
