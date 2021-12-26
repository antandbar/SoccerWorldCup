import {teams} from './teams.js';

import FootballPlayoff from './classes/FootballPlayoff.js';

let footballPlayoff = new FootballPlayoff("Playoff world championship",teams);

console.log(`\n\n=================================================`)
console.log(`===== COMIENZO DEL LA FASE DE ELIMINATORIAS =====`)
console.log(`=================================================\n`)

console.log(`Los equipos que van a participar en el playoff:\n\n${footballPlayoff.getTeams()}`);

console.log(`\n===== OCTAVOS DE FINAL =====\n`)

//for(let i=0; i<prueba.length; i++) {
//    console.log(prueba[i].homeName, prueba[i].awayName);
//}

footballPlayoff.getEighthsfinal().forEach(roundResult => {
    let winer;
    if (roundResult.homeGoals > roundResult.awayGoals) {
        winer = roundResult.homeName;
    } else {
        winer = roundResult.awayName;
    }
    console.log(`${roundResult.homeName} ${roundResult.homeGoals}  - ${roundResult.awayGoals} ${roundResult.awayName} => ${winer}`);
});
//console.log(footballPlayoff.getEighthsfinal());
//footballPlayoff.getEighthsfinal().forEach((roundResult) => {
//    console.log(roundResult);
//    roundResult.forEach ((match) => {
//        console.log(match)
//    });
        
        
//})

console.log(`\n===== CUARTOS DE FINAL =====\n`)

console.log(`\n===== SEMIFINALES =====\n`)

console.log(`\n===== FINAL =====\n`)

console.log(`\n\n=================================================`)
console.log(`¡España campeón del mundo!`)
console.log(`=================================================\n`)


