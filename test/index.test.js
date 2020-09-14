import fizzBuzz from '../index'

describe('test fizzBuzz game', () => {
    test('当输入包含3的数，应当返回Fizz', () => {
        const result = fizzBuzz(13)
        expect(result).toBe('Fizz')
    })

    test('当输入是3的倍数，应当返回Fizz', () => {
        const result = fizzBuzz(6)
        expect(result).toBe('Fizz')
    })

    test('当输入是5的倍数，应当返回Buzz', () => {
        const result = fizzBuzz(10)
        expect(result).toBe('Buzz')
    })

    test('当输入是7的倍数，应当返回Whizz', () => {
        const result = fizzBuzz(14)
        expect(result).toBe('Whizz')
    })

    test('当输入是3和5的倍数，应当返回FizzBuzz', () => {
        const result = fizzBuzz(15)
        expect(result).toBe('FizzBuzz')
    })

})
