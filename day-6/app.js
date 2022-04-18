const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3

/**
 * 
 * @param {String} str 
 * @param {number} wordLimit 
 * @returns 
 */
function truncateWithWordLimit(str, wordLimit) {
    
    let arr = str.split(" ")
    return arr.slice(0,wordLimit).join(" ")
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)
