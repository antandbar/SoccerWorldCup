import {teamsName} from './teams.js';
import FootballPlayoff from './classes/FootballPlayoff.js';

let footballPlayoff = new FootballPlayoff("Playoff: World Soccer Championship",teamsName);

console.log(`\n\n================================================`);
console.log(`===== COMIENZO DE LA FASE DE ELIMINATORIAS =====`);
console.log(`================================================\n`);

console.log(`Los equipos que van a participar en el playoff:\n\n${footballPlayoff.getTeams().join(', ')}`);

footballPlayoff.start().forEach((round) => {
    console.log(`\n===== ${round.roundName} =====\n`);

    round.roundResult.forEach((match) => {
        let winer;
        match.homeGoals > match.awayGoals ? winer = match.homeName : winer = match.awayName;
        console.log(`${match.homeName} ${match.homeGoals} - ${match.awayGoals} ${match.awayName} => ${winer}`);
   });
});

console.log(`\n\n================================================`);
console.log(`¡${footballPlayoff.getChampion()} campeón del mundo!`);
console.log(`================================================\n`);
