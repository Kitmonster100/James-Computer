<!DOCTYPE html>
<html>
<head>
	<title>Judge Scores</title>
</head>
<body>
	<h1>Judge Scores</h1>
	<table id="scoreTable">
		<thead>
			<tr>
				<th>Competitor</th>
				<th>Judge 1 Score</th>
				<th>Judge 2 Score</th>
				<th>Judge 3 Score</th>
			</tr>
		</thead>
		<tbody>
			<?php
				for ($i = 1; $i <= 10; $i++) {
					echo "<tr>";
					echo "<td>Competitor " . $i . "</td>";
					echo "<td><input type='number' class='judge-score' data-competitor='" . $i . "' data-judge='1'></td>";
					echo "<td><input type='number' class='judge-score' data-competitor='" . $i . "' data-judge='2'></td>";
					echo "<td><input type='number' class='judge-score' data-competitor='" . $i . "' data-judge='3'></td>";
					echo "</tr>";
				}
			?>
		</tbody>
	</table>
	<br>
	<button id="sortButton">Sort Scores</button>

	<!-- Load the JavaScript file -->
	<script src="score.js"></script>
</body>
</html>
