export default (number) => {
    let result = ''
    if (String(number).includes(3)) {
        return 'Fizz'
    }
    if (number % 3 === 0) {
        result += 'Fizz'
    }

    if (number % 5 === 0) {
        result += 'Buzz'
    }

    if (number % 7 === 0) {
        result += 'Whizz'
    }

    return result === '' ? number : result
}
