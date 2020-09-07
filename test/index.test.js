import fizzBuzz from '../index'

describe('test Fizzbuzz Game', () => {
    test('should output Fizz when run given contains 3', () => {
        const result = fizzBuzz(13)
        expect(result).toBe('Fizz')
    })

    test('should output Fizz when run given mod by 3', () => {
        const result = fizzBuzz(6)
        expect(result).toBe('Fizz')
    })

    test('should output Buzz when run given mod by 5', () => {
        const result = fizzBuzz(10)
        expect(result).toBe('Buzz')
    })

    test('should output Whizz when run given mod by 7', () => {
        const result = fizzBuzz(14)
        expect(result).toBe('Whizz')
    })

    test('should output FizzBuzz when run given mod by 3 5', () => {
        const result = fizzBuzz(15)
        expect(result).toBe('FizzBuzz')
    })

    test('should output FizzBuzzWhizz when run given mod by 3 5 7', () => {
        const result = fizzBuzz(105)
        expect(result).toBe('FizzBuzzWhizz')
    })

    test('should output FizzWhizz when run given mod by 3  7', () => {
        const result = fizzBuzz(21)
        expect(result).toBe('FizzWhizz')
    })
    test('should output BuzzWhizz when run given mod by 5  7', () => {
        const result = fizzBuzz(70)
        expect(result).toBe('BuzzWhizz')
    })

    test('should output self when run given not mod by 5 3 7', () => {
        const result = fizzBuzz(4)
        expect(result).toBe(4)
    })
})
