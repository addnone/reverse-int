module.exports = function reverse (n) {
    // sign = n > 0 ? "-" : ""
    string = n > 0 ? n.toString() : (-n).toString()
    return Number(string.split('').reverse().join(''))
}
