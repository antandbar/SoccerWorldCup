import {teams} from './teams.js';

import FootballPlayoff from './classes/FootballPlayoff.js';

let footballPlayoff = new FootballPlayoff("Playoff world championship",teams);

console.log(`\n\n=================================================`)
console.log(`===== COMIENZO DEL LA FASE DE ELIMINATORIAS =====`)
console.log(`=================================================\n`)

console.log(`Los equipos que van a participar en el playoff:\n\n${footballPlayoff.getTeams()}`);

//for(let i=0; i<prueba.length; i++) {
//    console.log(prueba[i].homeName, prueba[i].awayName);
//}

footballPlayoff.getEighthsfinal().forEach((round) => {
    console.log(`\n===== ${round.roundName} =====\n`)

  round.roundResult.forEach((match) => {
    let winer;
    match.homeGoals > match.awayGoals ? winer = match.homeName : winer = match.awayName;
    console.log(`${match.homeName} ${match.homeGoals}  - ${match.awayGoals} ${match.awayName} => ${winer}`);
   })

})


console.log(`\n===== CUARTOS DE FINAL =====\n`)

console.log(`\n===== SEMIFINALES =====\n`)

console.log(`\n===== FINAL =====\n`)

console.log(`\n\n=================================================`)
console.log(`¡España campeón del mundo!`)
console.log(`=================================================\n`)


