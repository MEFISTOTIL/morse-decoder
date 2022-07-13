const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
	'A': ' ',
};

function ofStringTodd(s) {
	let dd = '';
	let min = s;
	while (min[0] == 0) {
		min = min.slice(1);
	}
	if (min == '**********') {
		dd = dd + "A";
	}
	else {
		for (let i = 0; i < min.length; i += 2) {
			if (min[i] + min[i + 1] == 10) {
				dd = dd + '.';
			}
			else if (min[i] + min[i + 1] == 11) {
				dd = dd + '-';
			}
		}
	}
	return dd;
}

console.log(ofStringTodd('**********'))

function decode(expr) {
	let sum = '';
	for (let i = 0; i < expr.toString().length; i += 10) {
		let simvol = '';
		for (let k = i; k < i + 10; k++) {
			simvol = simvol + expr[k];
		}
		for (key in MORSE_TABLE) {
			if (key == ofStringTodd(simvol)) {
				sum = sum + MORSE_TABLE[key];
			}
		}
	}
	return sum
}

module.exports = {
	decode
}