// code your solution here
function superbowlWin(record) {
    // Find the first object in the record array where the result is "W" (win)
    const win = record.find(game => game.result === "W");
    
    // If a win object is found, return the year of the win
    // Otherwise, return undefined
    return win ? win.year : undefined;
}

module.exports = superbowlWin;