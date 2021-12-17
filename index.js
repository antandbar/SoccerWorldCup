import {teams} from './teams.js';

import FootballLeague from './classes/FootballLeague.js';

let footballLeague = new FootballLeague('Foot', ['A', 'B', 'C', 'D'])

footballLeague.scheduleMatchDays();
// DONE: Mostrar los equipos inscritos por pantalla.
const teamNames = footballLeague.teams.map(team => team.name);

teamNames.forEach(function(team){
    console.log(team)
})

console.log(footballLeague.matchDaySchedule)

// TODO: Mostrar la planificación por pantalla.
// TODO: Jugar lo partidos de todas las jornadas. Una vez terminada cada jornada, se deberá mostrar cómo queda la clasificación de la misma.
// TODO: Una vez terminada la liga, se mostrarán estádísticas de número de goles totales y total de puntos ganados.