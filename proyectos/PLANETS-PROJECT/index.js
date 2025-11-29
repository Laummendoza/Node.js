

const { parse } = require('csv-parse'); // Importa la librería 'csv-parse' para analizar archivos CSV
const FileSystem = require('fs');       // Importa el módulo 'fs' para trabajar con el sistema de archivos

const results = []; //array donde se almacenan los datos leídos del archivo CSV

FileSystem.createReadStream("kepler_data.csv") // Crea un flujo de lectura para el archivo 'kepler_data.csv'
    .pipe(parse({
        comment: '#', 
        columns:true ,            // Configura el analizador para ignorar líneas que comienzan con '#'
    }))

.on('data', (data) => {           // Escucha el evento 'data' para procesar cada fila del archivo CSV 
        results.push(data)              // cada chunk of data lo añade al array results
    })
    .on('error', (error) => {         // Escucha el evento 'error' para manejar errores durante la lectura del archivo
        console.log(error);            // Imprime en consola el error si ocurre alguno
    })
    .on('end', () => {                // Escucha el evento 'end' que se dispara cuando se ha leído todo el archivo
        console.log(results); 
        console.log("done")          // Imprime en consola el array results con los datos leídos del archivo CSV
    });

