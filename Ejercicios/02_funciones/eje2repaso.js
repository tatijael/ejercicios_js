// const number = prompt('ingrese un numero');

// const isOdd = number => {
// 	if (number % 2 == 0) {
// 		alert('numero par');
// 	} else {
// 		alert('numero impar');
// 	}
// };

// isOdd(number);

// let dineroInicial = 5000;
// let cantidadRetirar;
// const mostrarDineroDisponible = () => {
// 	alert(dineroInicial);
// };
// mostrarDineroDisponible();
// const pregunta = prompt(`desea retirar dinero?`);
// if (pregunta == 'si') {
// 	cantidadRetirar = prompt('cuanto desea retirar?');
// }

// const retirarDinero = cantidad => {
// 	if (dineroInicial >= cantidad) {
// 		dineroInicial -= cantidad;
// 		alert(`tu diero disponible es ${dineroInicial}`);
// 	} else {
// 		alert(`te quedaste sin dinero`);
// 	}
// };

// retirarDinero(cantidadRetirar);

// const mesIngresado = prompt('ingrese un mes:');
// if (
// 	mesIngresado == 'enero' ||
// 	mesIngresado == 'abril' ||
// 	mesIngresado == 'junio' ||
// 	mesIngresado == 'septiembre' ||
// 	mesIngresado == 'noviembre'
// ) {
// 	alert(`tiene 30 dias`);
// }
// if (
// 	mesIngresado == 'marzo' ||
// 	mesIngresado == 'mayo' ||
// 	mesIngresado == 'julio' ||
// 	mesIngresado == 'agosto' ||
// 	mesIngresado == 'octubre' ||
// 	mesIngresado == 'diciembre'
// ) {
// 	alert(`tiene 31 dias`);
// } else {
// 	mesIngresado == 'febrero';
// 	alert(`tiene 28 dias`);
// }

// const añoNacimiento = prompt(`Ingrese su año de nacimiento`);

// if (añoNacimiento >= 1946 && añoNacimiento <= 1964) {
// 	alert('perteneces a la generacion: BABY BOOMERS');
// } else if (añoNacimiento >= 1965 && añoNacimiento <= 1980) {
// 	alert('perteneces a la generacion: X ');
// } else if (añoNacimiento >= 1981 && añoNacimiento <= 2000) {
// 	alert('perteneces a la generacion: Millenials');
// } else if (añoNacimiento >= 2001 && añoNacimiento <= 2016) {
// 	alert('perteneces a la generacion: Z ');
// } else añoNacimiento < 1946 && añoNacimiento > 2016;
// {
// 	alert('No perteneces a ninguna generacion');
// }

// let cuarto = `1/4`;
// let medio = `1/2`;
// let tresCuarto = `3/4`;
// let unKilo = `1`;
// let sabor1;
// let sabor2;
// let sabor3;
// let sabor4;
// let sabor5;

// const kilosHelado = prompt(
// 	`Cuantos kilos de helados vas a comprar?  ${cuarto} , ${medio} , ${tresCuarto} , ${unKilo} `
// );
// if (kilosHelado == cuarto) {
// 	alert(`elije dos sabores`);
// 	sabor1 = prompt('ingresa tu primer sabor');
// 	sabor2 = prompt('ingresa tu segundo sabor');
// 	alert('elegiste ' + kilosHelado + ' de helado y los sabores' + sabor1 + ' ' + sabor2);
// } else if (kilosHelado == medio) {
// 	alert(`elije 3 sabores`);
// 	sabor1 = prompt('ingresa tu primer sabor');
// 	sabor2 = prompt('ingresa tu segundo sabor');
// 	sabor3 = prompt('ingresa tu tercer sabor');
// 	alert('elegiste ' + kilosHelado + ' de helado y los sabores' + sabor1 + ' ' + sabor2 + ' ' + sabor3);
// } else if (kilosHelado == tresCuarto) {
// 	alert(`elije 4 sabores`);
// 	sabor1 = prompt('ingresa tu primer sabor');
// 	sabor2 = prompt('ingresa tu segundo sabor');
// 	sabor3 = prompt('ingresa tu tercero sabor');
// 	sabor4 = prompt('ingresa tu cuarto sabor');
// 	alert('elegiste ' + kilosHelado + ' de helado ylos sabores ' + sabor1 + ' ' + sabor2 + ' ' + sabor3 + ' ' + sabor4);
// } else {
// 	alert('elije 5 sabores');
// 	sabor1 = prompt('ingresa tu primer sabor');
// 	sabor2 = prompt('ingresa tu segundo sabor');
// 	sabor3 = prompt('ingresa tu tercer sabor');
// 	sabor4 = prompt('ingresa tu cuarto sabor');
// 	sabor5 = prompt('ingresa tu quinto sabor');
// 	alert(
// 		'elegiste ' +
// 			kilosHelado +
// 			' de helado y los sabores ' +
// 			sabor1 +
// 			' ,' +
// 			sabor2 +
// 			' ,' +
// 			sabor3 +
// 			', ' +
// 			sabor4 +
// 			', ' +
// 			sabor5
// 	);
// }

// |12|
// const menuTv = () => {
// 	const operacion = prompt(`
// 	CAMBIAR CANAL
// 	CANAL SIGUIENTE
// 	CANAL ANTEARIOR
// 	SUBIR VOLUMEN
// 	BAJAR VOLUMEN
// 	MUTEAR`);
// 	switch (operacion) {
// 		case 'CAMBIAR CANAL':
// 			const canalUsuario = Number(prompt('Que canal deseas?'));
// 			cambiarCanal(canalUsuario);
// 			break;
// 		case 'CANAL SIGUIENTE':
// 			cambiarCanal(canal + 1);
// 			break;
// 		case 'CANAL ANTERIOR':
// 			cambiarCanal(canal - 1);
// 			break;
// 		case 'SUBIR VOLUMEN':
// 			cambiarVolumen(volumen + 5);
// 			break;
// 		case 'BAJAR VOLUMEN':
// 			cambiarVolumen(volumen - 5);
// 			break;
// 		case 'MUTEAR':
// 			cambiarVolumen(0);
// 			break;
// 		default:
// 			alert('operacion invalida');
// 	}
// };

// const startv = prompt(`desea encender televisor? si/no`);
// if (startv == `no`) {
// 	alert(`no encendiste el televisor`);
// } else {
// 	menuTv();
// 	menuTv();
// 	menuTv();
// 	menuTv();
// 	menuTv();
// 	menuTv();
// }

// simon dice//

// const getRandomColor = () => {
// 	const random = Math.random();
// 	if (random < 0.18) {
// 		return 'rojo';
// 	} else if (random < 0.35) {
// 		return 'azul';
// 	} else if (random < 0.78) {
// 		return 'verde';
// 	} else {
// 		return 'amarillo';
// 	}
// };

// const juego = () => {
// 	const color1 = getRandomColor();
// 	const color2 = getRandomColor();
// 	const color3 = getRandomColor();
// 	const color4 = getRandomColor();
// 	const color5 = getRandomColor();
// 	alert(`simon dice : ${color1} , ${color2} , ${color3} , ${color4} , ${color5}`);
// 	const usuariocolor1 = prompt('ingrese el primero color');
// 	const usuariocolor2 = prompt('ingrese el segundo color');
// 	const usuariocolor3 = prompt('ingrese el tercer color');
// 	const usuariocolor4 = prompt('ingrese el cuarto color');
// 	const usuariocolor5 = prompt('ingrese el quinto color');
// 	if (
// 		color1 == usuariocolor1 &&
// 		color2 == usuariocolor2 &&
// 		color3 == usuariocolor3 &&
// 		color4 == usuariocolor4 &&
// 		color5 == usuariocolor5
// 	) {
// 		return 'ganaste';
// 	} else return 'perdiste';
// };
// juego();

// let salud = 10;
// let felicidad = 10;
// let limpiez = 10;
// let energia = 10;

// const getRandom = () => {
// 	return Math.ceil(Math.random() * 10);
// };

// let salud = getRandom();
// let felicidad = getRandom();
// let limpieza = getRandom();
// let energia = getRandom();

// const tamagotchi = alert('hola!! bienvenido mi nombre es botzi (ツ)_/¯');

// const

// let asterico = '*';

// for (let i = 1; i <= 16; i++) {
// 	console.log();
// 	asterico = asterico + '*';
// }

// Crear un programa para controlar las vueltas de una deportista.
// Debe pedir al usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo en segundos de cada vuelta.
// Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta y el promedio del tiempo
// de las vueltas(suma de las vueltas / cantidad de vueltas).Ejemplo:

// Cantidad de vueltas: 3
// Vuelta 1: 133s
// Vuelta 2: 145s
// Vuelta 3: 166s
// ⏱ Promedio: 144.45

// let tiempoVueltas = [];
// const cantidadVueltas = Number(prompt('cuantas vueltas vas a dar?'));

// for (let i = 0; i < cantidadVueltas; i++) {
// 	tiempoVueltas[i] = Number(prompt('ingrese tiempo de la vuelta ' + (i + 1)));
// 	// tiempoVueltas.push(Number(prompt("ingrese el tiempo de la vuelta" + i)));
// }

// // [20, 35.5, 65]

// const SumaDeTiempos = () => {
// 	let sumaTotal = 0;
// 	for (let i = 0; i < tiempoVueltas.length; i++) {
// 		sumaTotal = sumaTotal + tiempoVueltas[i];
// 	}
// 	return sumaTotal;
// };

// const mostrarDatos = () => {
// 	for (let i = 0; i < tiempoVueltas.length; i++) {
// 		console.log('tiempo de la vuelta ' + (i + 1) + ' = ', tiempoVueltas[i]);
// 	}

// 	console.log('el promedio es = ', SumaDeTiempos() / cantidadVueltas);
// };

// mostrarDatos();

// 📀 Playlist

// Crear un programa que pida al usuario ingresar el nombre de una playlist
// y cuántas canciones desea agregar a la misma.Luego debe ir pidiendo agregar
// la cantidad de canciones elegidas de a una.Se debe ir mostrando la cantidad
// de canciones que quedan por agregar y la playlist con los temas hasta el momento
// a medida que se va a actualizando.Al finalizar mostrar un mensaje con el nombre
// de la playlist y la lista de canciones.

// let canciones = [];

// const nombrePlaylist = prompt('Ingrese un nombre para la Playlist');
// const cantidadCanciones = Number(prompt('Cuantas canciones deseas agregar?'));

// for (let i = 0; i < cantidadCanciones; i++) {
// 	canciones.push(
// 		prompt(
// 			'Nombre playlist: ' +
// 				nombrePlaylist +
// 				'  ///  canciones ->  ' +
// 				canciones +
// 				' ///  ingrese cancion ' +
// 				(i + 1) +
// 				' --> ' +
// 				' te quedan ' +
// 				(cantidadCanciones - (i + 1)) +
// 				' canciones por agregar'
// 		)
// 	);
// }
// alert('Tu playlist se llama' + nombrePlaylist + 'y tus canciones son' + canciones);

// ✊🤚✌️ Piedra, papel, tijera II

// Al ejercicio de Piedra, papel, tijera de condicionales,
// 	agregarle la posibilidad de jugar la cantidad de rondas que se deseen.
// Por cada ronda, se debe mostrar ambas jugadas(usuario y computadora), quién gano la ronda,
// 	puntaje parcial hasta el momento y rondas restantes.
// Al finalizar se debe indicar quién ganó.Ejemplo:

// Ronda: 2 de 5
// 🙍‍♀️ Jugadora: Piedra
// 👾 Computadora: Tijera
// Jugadora ha ganado esta ronda 🎉
// Puntaje: 2(Jugadora) - 0(Computadora)

// const getRandomOption = () => {
// 	const random = Math.random();
// 	if (random <= 0.33) {
// 		return "piedra";
// 	} else if (random <= 0.66) {
// 		return "tijera";
// 	} else {
// 		return "papel";
// 	}
// };

// let cantRondas = Number(prompt("cuantas rondas queres jugar?"));

// const game = (player1, player2) => {
// 	if (!player2) {
// 		player2 = getRandomOption();
// 	}
// 	console.log(jugador eligio: ${ player1 });
// 	console.log(computadora eligio: ${ player2 });

// 	if (player1 == player2) {
// 		return "empate";
// 	} else if (
// 		(player1 == "tijera" && player2 == "piedra")
// 			(player1 == "papel" && player2 == "tijera")
// 			(player1 == "piedra" && player2 == "papel")
// 	) {
// 		return "perdio";
// 	} else if (
// 		(player1 == "tijera" && player2 == "papel")
// 			(player1 == "papel" && player2 == "piedra")
// 			(player1 == "piedra" && player2 == "tijera")
// 	) {
// 		return "gano";
// 	}
// };

//

// const numeros = [12, 20, 35, 47, 5, 6, 7, 8, 9];

// const meses = new Array('ene', 'feb', 'mar', 'abr');

// const remix = [1, 'soy un simple texto', null, meses, numeros];
// console.log(remix);
// console.log(remix[3]);
// console.log(remix[3][0]);
// console.log('largo:', numeros.length);

// for (let i = 0; i < numeros.length; i++) {
// 	console.log(numeros[i]);
// }
