
export default (number) => {
    if (String(number).includes(3)) {
        return 'Fizz'
    }

    if (number % 5 === 0 && number % 3 === 0) {
        return 'FizzBuzz'
    }
    if (number % 3 === 0) {
        return 'Fizz'
    }

    if (number % 5 === 0) {
        return 'Buzz'
    }

    if (number % 7 === 0) {
        return 'Whizz'
    }

}
