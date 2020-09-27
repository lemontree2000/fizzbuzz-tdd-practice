import fizzBuzz from '../index'

describe('test fizzBuzz game', () => {
    test('当输入包含3的数， 报Fizz', () => {
        const result = fizzBuzz(13)
        expect(result).toBe('Fizz')
    })
    
})
