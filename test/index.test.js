import fizzBuzz from '../index'

describe('test fizzBuzz game', () => {
    test('当遇到包含3的数，报Fizz', () => {
        const result = fizzBuzz(13)
        expect(result).toBe('Fizz')
    })
    
    
})
