import fizzBuzz from '../index'

describe('test fizzBuzz game', () => {
    test('当是包含3的数时，报Fizz', () => {
        const result = fizzBuzz(13);
        expect(result).toBe('Fizz')
    })

    test('当是包含3的倍数时，报Fizz', () => {
        const result = fizzBuzz(6);
        expect(result).toBe('Fizz')
    })

    test('当是包含5的倍数时，报Buzz', () => {
        const result = fizzBuzz(10);
        expect(result).toBe('Buzz')
    })

    test('当是包含7的倍数时，报Whizz', () => {
        const result = fizzBuzz(14);
        expect(result).toBe('Whizz')
    })

    test('当是包含3和5的倍数时，报FizzBuzz', () => {
        const result = fizzBuzz(15);
        expect(result).toBe('FizzBuzz')
    })

    test('当是包含3和7的倍数时，报FizzWhizz', () => {
        const result = fizzBuzz(21);
        expect(result).toBe('FizzWhizz')
    })

    test('当是包含5和7的倍数时，报BuzzWhizz', () => {
        const result = fizzBuzz(70);
        expect(result).toBe('BuzzWhizz')
    })

    test('当是包含3和5和7的倍数时，报FizzBuzzWhizz', () => {
        const result = fizzBuzz(105);
        expect(result).toBe('FizzBuzzWhizz')
    })

    test('当是不包含3和5和7的倍数时，报自己', () => {
        const result = fizzBuzz(4);
        expect(result).toBe(4)
    })

})
