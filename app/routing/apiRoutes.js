const friends = require('./../data/friends.js');

let myAnswers = [2,3,1,1,1,3,1,3,5,1];

// ARRAYS:
// 1. matchDiff 0-10;  --> Best Match
// 2. matchDiff 11-20; --> Close Match
// 3. matchDiff 21-30; --> Not so good match
// 4. matchDiff 31-40  --> No match

// this functions retuns the best mast obj 0-10
const getBestMatch = arr => {
	let bestMatch; // stores best match friend obj
	for(let i=arr.length; i >= 0; i-- ) { // loops through the last item added to top
		arr[i] = parseInt(arr[i]);
		if(arr[i] <= 10) {
			bestMatch = friends[i]; // the best match
			break;
		}
	}
	console.log(bestMatch);
	return bestMatch; // return best match obj
}

// function returns an array of each score difference by friends index
const getMatch = scores => {
	let match = []; // stores all the matches differences by object index

	// Function should match each item from friends list
	// and return a diff match points
	const getMatchDiff = arr => {
		let totalDiff = 0;
		for(let i = 0; i < arr.length; i++) {
			scores[i] = parseInt(scores[i]);
			arr[i] = parseInt(arr[i]);
			totalDiff += Math.abs(scores[i] - arr[i]);
		}
		return totalDiff;
	}

	// loop pushes each difference to match array
	friends.forEach(object =>{
		match.push(getMatchDiff(object.scores));
	});
	console.log(match);
	return match;
}

module.exports = app => {
	app.get('/api/friends', (req, res) => {
		res.json(friends);
	});

	app.post('/api/friends', (req, res) => {
		let newFriend = req.body;

		let bestMatch = getBestMatch(getMatch(newFriend.scores));

		if(bestMatch === undefined){
			res.json(null);
		} else {
			res.json(bestMatch);
		}

		friends.push(newFriend);
		console.log('friend added');
	});
}