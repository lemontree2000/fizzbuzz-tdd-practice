import fizzBuzz from '../index'

describe('test fizzBuzz game', () => {
    test('当输入包含3 的数，输出Fizz', () => {
        const result = fizzBuzz(13);
        expect(result).toBe('Fizz');
    })

    
})
