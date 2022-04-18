const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

/**
 * 
 * @param {Date} dateText1 
 * @param {Date} dateText2 
 * @returns 
 */

function getDaysBetweenDates(dateText1, dateText2) {
    // write your solution here
    const start = new Date(dateText1)
    const end = new Date(dateText2)

    const timeDifferenceInMS = end.getTime() - start.getTime()

    return Math.floor(timeDifferenceInMS/DAY_IN_MILLISECONDS)
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)
