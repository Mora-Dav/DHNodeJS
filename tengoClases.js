/*

let dia = 'sabado';

switch (dia){
    case 'lunes':
    case 'miercoles':
    case 'viernes':
    	console.log ('tienes clases')
		break;
	default: 
		console.log ('no tienes clases')
	}
*/

	let dia = 'jueves'
function tengoClases(dia) {
	switch (dia) {
    	case 'lunes',' miercoles',' viernes' :
		console.log ('tienes clases');
		break;
		default :
		console.log ('no tienes clases');
	}
}   

tengoClases(dia)