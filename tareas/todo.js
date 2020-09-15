const fs = require('fs');
const data = fs.readFileSync('tareas.json', 'utf-8');

const tareas = JSON.parse(data);

const accionDelUsuario = process.argv[2];

switch (accionDelUsuario) {
    case 'listar':
        console.log('El usuario eligió listar');
    break;
    case 'agregar':
        console.log('El usuario eligió agregar');
    break;
    case undefined:
        console.log('El usuario no eligió nada. Opciones: listar o agregar')
    break;
    default:
        console.log('El usuario eligió una opción incorrecta')
    break;
}

/*
for (tarea of tareas) {
    console.log('- ' + tarea.titulo +': ' + tarea.estado);
}
*/