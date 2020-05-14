m const isOdd = Number => {
	return number % 2 == 1;
};

const inRange = (x, min, max) => {
	return min <= x <= max;
};

const inRange = (x, min, max) => {
	if (x >= min && x <= max) {
		return true;
	} else {
		return false;
	}

	if (min <= x <= max) {
		return true;
	} else {
		return false;
	}

	return min <= x <= max;
};

const number = prompt('ingrese un valor');

const isOdd = number => {
	if (number % 2 == 0) {
		alert('numero par');
	} else {
		alert('numero impar');
	}
};
isOdd(number);

const generation = year => {
	if (year <= 2016 && year >= 1996) {
		alert('perteneces a la generación z');
	} else if (year <= 1995 && year >= 1977) {
		alert('perteneces a la generación x');
	} else {
		alert('no pertenece a ninguna de ellas');
	}
};

const letter = prompt('ingrese una letra');

const getGoupLetter = letter => {
	if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
		alert('Perteneces al Grupo A');
	} else if (letter == 'b' || letter == 'c' || letter == 'd' || letter == 'e' || letter == 'f' || letter == 'g') {
		alert('Perteneces al Grupo B');
	} else if (letter == 'h' || letter == 'j' || letter == 'k' || letter == 'l' || letter == 'm') {
		alert('Perteneces al Grupo C');
	} else if (letter == 'n' || letter == 'p' || letter == 'q' || letter == 'r') {
		alert('Perteneces al Grupo D');
	}
};
getGoupLetter(letter);

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function randomEleccionCompu() {
	const valorRandom = getRandomInt(0, 3);
	if (valorRandom === 0) {
		return 'piedra';
	}
	if (valorRandom === 1) {
		return 'papel';
	}
	return 'tijera';
}

const getFechas = temporada => {
	switch (fechas) {
		case 'invierno':
	}
};
