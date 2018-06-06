const fs = require('fs');

let ListadoPorHacer = [];


const cargarDB = () => {
    try {
        ListadoPorHacer = require('../db/data.json');
    } catch (error) {
        ListadoPorHacer = [];
    }
    return ListadoPorHacer;
}


const guardarDB = () => {
    let data = JSON.stringify(ListadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar ', err);
    });
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    ListadoPorHacer.push(porHacer);
    guardarDB();
};


const getListado = () => {
    cargarDB();
    return ListadoPorHacer;
}


const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = ListadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        ListadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = ListadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });
    if (nuevoListado.length === ListadoPorHacer.length) {
        return false;
    } else {
        ListadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
};


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}