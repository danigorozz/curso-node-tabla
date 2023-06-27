//import * as fs from 'node:fs/promises';
const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        let salida = '';

        for(let i = 0; i <= hasta; i++){
            salida += `${base} ${'x'.magenta} ${i} = ${base*i}\n`;
        }

        if (listar) {
            console.log('======================='.green);
            console.log(`      TABLA DEL ${colors.blue(base)}     `);
            console.log('======================='.green);
            console.log(salida)
        };
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error
    }
    
};

module.exports = {
    crearArchivo
}