export default (number) => {
    let outString = ''
    if (String(number).includes('3')) {
        return 'Fizz'
    }
    if (number % 3 === 0) {
        outString += 'Fizz'
    }
    if (number % 5 === 0) {
        outString += 'Buzz'
    }
    if (number % 7 === 0) {
        outString += 'Whizz'
    }
    return outString
}
