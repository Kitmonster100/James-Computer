//Function to sort the scores in descending order
function sortScores() {
	//Get all the scores from the input fields and store them in an array of objects
	var scores = [];
	var scoreInputs = document.querySelectorAll('.judge-score');
	scoreInputs.forEach(function(scoreInput) {
		var competitor = scoreInput.dataset.competitor;
		var judge = scoreInput.dataset.judge;
		var score = scoreInput.value;
		var scoreObject = {
			'competitor': competitor,
			'score': score
		};
		var existingScore = scores.find(function(obj) {
			return obj.competitor === competitor;
		});
		if (existingScore) {
			existingScore['score' + judge] = score;
			existingScore['score'] += parseInt(score);
		} else {
			scoreObject['score' + judge] = score;
			scoreObject['score'] = parseInt(score);
			scores.push(scoreObject);
		}
	});

	//Sort the scores in descending order
	scores.sort(function(a, b) {
		return b.score - a.score;
	});

	//Output the sorted scores in a table format
	var scoreTable = document.querySelector('#scoreTable tbody');
	scoreTable.innerHTML = '';
	scores.forEach(function(score, index) {
		var row = document.createElement('tr');
		row.innerHTML = '<td>' + (index + 1) + '</td><td>Competitor ' + score.competitor + '</td><td>' + score.score1 + '</td><td>' + score.score2 + '</td><td>' + score.score3 + '</td><td>' + score.score + '</td>';
		scoreTable.appendChild(row);
	});
}

//Add a click event listener to the Sort Scores button
var sortButton = document.querySelector('#sortButton');
sortButton.addEventListener('click', sortScores);
