import fizzBuzz from '../index'

describe('test fizzBuzz game', () => {
    test('当输入包含3 的数，输出Fizz', () => {
        const result = fizzBuzz(13);
        expect(result).toBe('Fizz');
    })

    test('当输入包含3 的倍数，输出Fizz', () => {
        const result = fizzBuzz(6);
        expect(result).toBe('Fizz');
    })

    test('当输入包含5 的倍数，输出Buzz', () => {
        const result = fizzBuzz(10);
        expect(result).toBe('Buzz');
    })

    test('当输入包含7 的倍数，输出Whizz', () => {
        const result = fizzBuzz(14);
        expect(result).toBe('Whizz');
    })

    test('当输入包含3和5 的倍数，输出FizzBuzz', () => {
        const result = fizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    })

    test('当输入包含3和7 的倍数，输出FizzWhizz', () => {
        const result = fizzBuzz(21);
        expect(result).toBe('FizzWhizz');
    })

    test('当输入包含5和7 的倍数，输出FizzWhizz', () => {
        const result = fizzBuzz(70);
        expect(result).toBe('BuzzWhizz');
    })

    test('当输入包含3和5和7 的倍数，输出FizzBuzzWhizz', () => {
        const result = fizzBuzz(105);
        expect(result).toBe('FizzBuzzWhizz');
    })
    test('当输入不是3和5和7 的倍数，输出自身', () => {
        const result = fizzBuzz(4);
        expect(result).toBe(4);
    })

    
})
