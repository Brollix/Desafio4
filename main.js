/* Con los conocimientos vistos hasta el momento, empezarás a armar la
estructura inicial de tu proyecto integrador.A partir de los ejemplos
mostrados la primera clase, deberás:
Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un
simulador de créditos?¿un simulador personalizado ?
Armar la estructura HTML del proyecto.
Incorporar al menos un prompt para pedir un dato y luego mostrarlo
mediante alert realizando alguna operación.
Utilizar funciones para realizar esas operaciones. */

const profe = 'Conrado';

let productos = [
	'Auto de Coleccion sin frenos',
	'Lapicera de Oro si tinta',
	'Celular usado por Putin',
	'Estatua del Diego con barbijo',
	'La Constante Universal "Conrado"',
	'Ropa interior usada por tu Tia Roberta',
];

let precio = Math.trunc(Math.random() * 10000);
let impuesto = 1.65;

saludo(productos);

let numero = parseInt(
	prompt('Ingresa el numero del producto que venis a comprar:')
);
while (isNaN(numero) || numero > 6 || numero < 1) {
	numero = parseInt(prompt('Invalido. Ingresa un numero:'));
}

alert(`El producto n° ${numero} es ` + productos[numero - 1]);

alert('Procedo a cobrarte. El precio de lista es: ' + precio);
let respuesta = prompt(
	'Queres pagar en Cuotas?',
	'Ingresa "si" o "no"'
).toLowerCase();

while (
	typeof respuesta != 'string' &&
	(respuesta != 'si' || respuesta != 'no')
) {
	respuesta = prompt(
		'Invalido. Ingresa tu respuesta correctamente:'
	).toLowerCase();
}

if (respuesta === 'si') {
	let cantCuotas = prompt('Ingrese Cantidad de cuotas: ', '3, 6 o 12');
	while (
		isNaN(cantCuotas) ||
		cantCuotas % 3 != 0 ||
		cantCuotas > 12 ||
		cantCuotas < 3
	) {
		cantCuotas = prompt('Intente nuevamente: ', '3, 6 o 12');
	}
	alert(
		'Usted eligio ' +
			cantCuotas +
			' cuotas.' +
			' Su Precio por Cuota sera de: ' +
			Math.trunc(calculadorCuotas(precio, cantCuotas))
	);
} else {
	alert(
		'Su respuesta fue "' +
			respuesta +
			'". Que lastima, El pago en Cuotas era sin interes. Si es en un solo pago le cobramos un impuesto del 65%, porque se nos dio la gana.'
	);

	alert(
		'El precio final de: "' +
			productos[numero - 1] +
			'" es: ' +
			Math.trunc(calcImpuesto(precio, impuesto))
	);
}

function saludo(numero) {
	alert('Buenardas Tardes');
	alert(
		'Somos la casa "Ventas por la Mitad", nos llamamos asi porque todo esta por la mitad, y no de precio.'
	);
	alert(
		'Si venis a esta tienda es porque ya sabes que productos tenemos. Asi que en la proxima ventana ingresa el numero del producto a comprar. ' +
			`Numero del 1 al ${numero.length}. ` +
			'Y si no sabes, no sos digno de comprar aca.'
	);
}

function calcImpuesto(subtotal, impuesto) {
	return subtotal * impuesto;
}

function calculadorCuotas(numero, cantidad) {
	return numero / cantidad;
}
