const friends = require('./../data/friends.js');

let myAnswers = [2,3,1,1,1,3,1,3,5,1];

// stores match score by index
// NOTE: THIS IS ONLY NECESSARY IF YOU WANT
// A LIST OF PEOPLE THAT MATCH. IF YOU ONLY WANT ONE RESULT
// YOU CAN CHECK IN THE FOREACH LOOP FOR JUST ONE.
// ARRAYS:
// 1. matchDiff 0-10;  --> Best Match
// 2. matchDiff 11-20; --> Close Match
// 3. matchDiff 21-30; --> Not so good match
// 4. matchDiff 31-40  --> Almost no match

let match = [];


// Function should match each item from friends list
// and return a diff match points
const getMatchDiff = arr => {
    let totalDiff = 0;
    for(let i = 0; i < arr.length; i++) {
        totalDiff += Math.abs(myAnswers[i] - arr[i]);
    }
    return totalDiff;
}

// loop pushes each difference to match array
friends.forEach(object =>{
    match.push(getMatchDiff(object.scores));
});

console.log(match);