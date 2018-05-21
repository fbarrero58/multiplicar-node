const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    if (!Number(base)) {
        console.log(`${base} no es un número`);
        return;
    }

    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base * index}`.green);
    }

}

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }

        let data = '';

        for (let index = 1; index <= 10; index++) {
            data += `${base} * ${index} = ${base * index}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);

        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}