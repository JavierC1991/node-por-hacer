const descripcion = {
    desc: 'Descripcion de la tarea por hacer',
    demand: true,
    alias: 'd'
}

const completado = {
    desc: 'Marca como completado o pendiente la tarea',
    default: true,
    alias: 'c'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el elemento complletado de una tarea', { descripcion, completado })
    .command('borrar', 'Borra una tarea de la base de datos', { descripcion })
    .argv;

module.exports = {
    argv
}