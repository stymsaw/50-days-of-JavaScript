const num = 3849;

function reverseGivenInteger(num) {
    return parseFloat(num.toString().split("").reverse().join(""))
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)
