const EventEmitter = require('events');

const celebrity = new EventEmitter();

//OBSERVER 1
celebrity.on('raceWon', (position) => {
    if (position === 1) {
        console.log('Observer 1: Congratulations on winning the race!');
    }
});

//OBSERVER 2
celebrity.on('raceWon', (position) => {
    if (position === 1) {
        console.log('Observer 2: You are not as amazing as you think !');
    }
});


//EMITTING THE EVENT
celebrity.emit('raceWon', 1);

// Output:
// Observer 1: Congratulations on winning the race!
// Observer 2: You are not as amazing as you think !      

//Dos observadores apuntan al mismo objeto reaccionando con la ejecucion de sus respectivas callback ante dicho evento
