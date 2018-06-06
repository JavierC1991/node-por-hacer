const argv = require('./yargs/yargs').argv
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

const comando = argv._[0];

switch (comando) {
    case 'crear':
        porHacer.crear(argv.descripcion)
        break;
    case 'listar':
        let tareas = porHacer.getListado();
        for (let tarea of tareas) {
            console.log('========== Tarea ==========='.green);
            console.log(`${tarea.descripcion}`);
            console.log(`completado: ${tarea.completado}`);
            console.log('============================'.green)
        }
        break;
    case 'actualizar':
        let resultado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(resultado)
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('comnado no reconocido');
}