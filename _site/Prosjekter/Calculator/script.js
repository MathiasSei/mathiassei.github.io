var numbs = [];

function addNumb(buttonNumb) {
	var x = buttonNumb;
	numbs.push(x);
	console.log(numbs);
	document.getElementById('displayField').value = numbs.join(" + ")
}

function calculate() {
	var sum = 0;

	for (var i = 0; i < numbs.length; i++) {
		sum = sum + numbs[i];

	}

	numbs = [];
	console.log(sum);
	document.getElementById('displayField').value = sum;
}