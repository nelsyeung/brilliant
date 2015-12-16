var ans = [];
var ansStr = '';
var prevAns = '';
var trials = '';
var $trials = document.getElementById('trials');

function reset() {
	ans = [];
	ansStr = '';
	trials = '';
}

function printAnswer() {
	$trials.innerHTML = trials;
	for (var i = 0; i < 9; ++i) {
		document.getElementById('answer' + (i + 1)).innerHTML = ans[i];
	}
}

function findAnswer() {
	for (var i = 0; i < 9; ++i) {
		ans.push(27);
	}

	ansStr = ans.join('');
	trials += ansStr + '<br>';

	while (true) {
		var counter = [];

		for (var i = 0; i < 9; ++i) {
			counter.push(1);
		}

		for (var i = 0; i < 9; ++i) {
			var digits = String(ans[i]).split('');
			counter[digits[0] - 1]++;
			counter[digits[1] - 1]++;
		}

		for (var i = 0; i < 9; ++i) {
			ans[i] = 27 - counter[i];
		}

		ansStr = ans.join('');
		trials += ansStr + '<br>';

		if (prevAns !== ansStr) {
			prevAns = ansStr;
		}
		else {
			break;
		}
	}

	printAnswer();
}
