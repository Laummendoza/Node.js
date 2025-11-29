

const { parse } = require('csv-parse'); // Importa la librería 'csv-parse' para analizar archivos CSV
const FileSystem = require('fs');       // Importa el módulo 'fs' para trabajar con el sistema de archivos

const habitablePlanets = []; //array doe planetas habitables

function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}
FileSystem.createReadStream("kepler_data.csv") // Crea un flujo de lectura para el archivo 'kepler_data.csv'
    .pipe(parse({
        comment: '#', 
        columns:true ,            // Configura el analizador para ignorar líneas que comienzan con '#'
    }))

.on('data', (data) => {           // Escucha el evento 'data' para procesar cada fila del archivo CSV 
        if (isHabitablePlanet(data)){
            habitablePlanets.push(data);
        }              // cada chunk of data lo añade al array results
    })
    .on('error', (error) => {         // Escucha el evento 'error' para manejar errores durante la lectura del archivo
        console.log(error);            // Imprime en consola el error si ocurre alguno
    })
    .on('end', () => {      
        console.log(`se encontraron ${habitablePlanets.length} planetas habitables! filtrados por tamaño, luminosidad que absorben del sol y tamaño`)          // Escucha el evento 'end' que se dispara cuando se ha leído todo el archivo
       // console.log(habitablePlanets); 
        console.log("done")          // Imprime en consola el array results con los datos leídos del archivo CSV
    });

