import {teams} from './teams.js';

import FootballLeague from './classes/FootballLeague.js';

//let footballLeague = new FootballLeague('SoccerWorldCup', ['A', 'B', 'C', 'D'])

let footballLeague = new FootballLeague('SoccerWorldCup', teams)

footballLeague.scheduleMatchDays();

// DONE: Mostrar los equipos inscritos por pantalla.
const teamNames = footballLeague.getTeamNames();

teamNames.forEach(function (team) {
    console.log(team)
})

// DONE: Mostrar la planificación por pantalla.
footballLeague.matchDaySchedule.forEach((matchDay, matchDayIndex) => {
    console.log(`JORNADA ${matchDayIndex + 1}`)
    matchDay.forEach(match => {

        if (match.home === null || match.away === null) {
            const teamName = match.home || match.away
            console.log(`${teamName} DESCANSA`);
        } else {
            console.log(`${match.home} vs ${match.away}`);
        }

        // if(match.home === null){
        //     console.log(`${match.away} DESCANSA`)
        // } else if(match.away === null ){
        //     console.log(`${match.home} DESCANSA`)
        // } else {
        //     console.log(`${match.home} vs ${match.away}`);
        // }
    })
    console.log('=======================')
})
// DONE: Jugar los partidos de todas las jornadas. 
footballLeague.start();
// Una vez terminada cada jornada, se deberá mostrar cómo queda la clasificación de la misma.
footballLeague.summaries.forEach((summary, matchDayIndex) => {
    console.log(`Resultados de la jornada ${matchDayIndex + 1}`)
    summary.results.forEach((result) => {
        console.log(`${result.homeTeamName} ${result.homeGoals} - ${result.awayGoals} ${result.awayTeamName}`)
    })
    console.table(summary.standings, ["name","points","goalsFor","goalsAgainst"])
    console.table(summary.standings)
    console.log('\n');
})

// DONE: Una vez terminada la liga, se mostrarán estadísticas de número de goles totales y total de puntos ganados.
const totalGoals = footballLeague.teams.reduce((accumulated, team) => {
    return accumulated + team.goalsFor
}, 0)

const totalPoints = footballLeague.teams.reduce((accumulated, currentValue) => accumulated + currentValue.points, 0)

console.log(`Total goals are ${totalGoals}`)
console.log(`Total points are ${totalPoints}`)

const initialMetrics = { totalGoals: 0, totalPoints: 0 }
const finalMetrics = footballLeague.teams.reduce((acc, curr) => {
    acc.totalGoals += curr.goalsFor;
    acc.totalPoints += curr.points;
    return acc
}, initialMetrics)

//console.table(finalMetrics, ["points"]);
console.table(finalMetrics);



