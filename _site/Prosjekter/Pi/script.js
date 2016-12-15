var piActual = "3.141592653589793238462643383279502884197169399375105820974944592307816406286 208998628034825342117067982148086513282306647093844609550582231725359408128481 117450284102701938521105559644622948954930381964428810975665933446128475648233 786783165271201909145648566923460348610454326648213393607260249141273724587006 606315588174881520920962829254091715364367892590360011330530548820466521384146 951941511609433057270365759591953092186117381932611793105118548074462379962749";

function pi() {
	console.log(Math.PI);
	var n = document.getElementById('number').value;
	var x = (Math.floor((Math.PI * Math.pow(10, n)))) % 10;
	console.log("The " + n + "th digit of pi is " + x);

	document.getElementById('box').innerHTML = x;
}

function piPlus() {
	var n = 3;
	var x = 2;

	for (var i = 2; i < 1000000; i++) {
		if (i % 2 === 0) {
			n += (4 / (x * (x + 1) * (x + 2)));
		} else {
			n -= (4 / (x * (x + 1) * (x + 2)));
		}

		x += 2;
	} 

	console.log(n);
}

function piCounter() {
	console.log(piActual.length);
	var spaceCount = 0;
	for (var x = 0; x < piActual.length; x++) {
		if (piActual[x] === " ") {
			piActual[x] = "x";
			spaceCount++;
		}
	}
	console.log(piActual);
	console.log(spaceCount);
}