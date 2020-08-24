import fizzBuzz from '../index'

describe('test fizzbuzz game', () => {
    test('数字包含3输出应该是Fizz', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
    })
    
    test('数字是3的倍数应该输出Fizz', () => {
        expect(fizzBuzz(6)).toBe('Fizz')
    })

    test('数字是5的倍数应该输出Buzz', () => {
        expect(fizzBuzz(10)).toBe('Buzz')
    })

    test('数字是7的倍数应该输出Whizz', () => {
        expect(fizzBuzz(49)).toBe('Whizz')
    })
    
    test('数字即是3的倍数也是5的倍数应该输出FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })

    test('数字即是3的倍数也是7的倍数应该输出FizzWhizz', () => {
        expect(fizzBuzz(21)).toBe('FizzWhizz')
    })

    test('数字即是5的倍数也是7的倍数应该输出BuzzWhizz', () => {
        expect(fizzBuzz(70)).toBe('BuzzWhizz')
    })

    test('数字即是3的倍数也是5 的倍数且是7的倍数应该输出FizzBuzzWhizz', () => {
        expect(fizzBuzz(105)).toBe('FizzBuzzWhizz')
    })
    
    
    
     
    
})
