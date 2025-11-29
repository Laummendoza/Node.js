

const { parse } = require('csv-parse');
const FileSystem = require('fs');

const habitablePlanets = [];

//filtra planetas segun ciertas caracteristicas
function isHabitablePlanet(planet) { 
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}

// Crea un flujo de lectura para el archivo 'kepler_data.csv'
FileSystem.createReadStream("kepler_data.csv") 
    .pipe(parse({
        comment: '#',
        columns: true,
    }))

    .on('data', (data) => {
        if (isHabitablePlanet(data)) {
            habitablePlanets.push(data);
        }
    })
    .on('error', (error) => {
        console.log(error);
    })
    .on('end', () => {
        console.log(`se encontraron ${habitablePlanets.length} planetas habitables! filtrados por tamaño, luminosidad que absorben del sol y tamaño`)          // Escucha el evento 'end' que se dispara cuando se ha leído todo el archivo
        console.log(habitablePlanets.map((planet) => {
            return planet['kepler_name'];
        }))
        console.log("done")
    });

