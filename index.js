export default (number) => {
    if (String(number).includes(3)) {
        return 'Fizz'
    }

    let result = ''

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
