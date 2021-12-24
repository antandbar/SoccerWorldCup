import {teams} from './teams.js';

import FootballPlayoff from './classes/FootballPlayoff.js';

let footballPlayoff = new FootballPlayoff(teams);

console.log(`\n\n=================================================`)
console.log(`===== COMIENZO DEL LA FASE DE ELIMINATORIAS =====`)
console.log(`=================================================\n`)

console.log(`Los equipos que van a participar en el playoff:\n\n${footballPlayoff.getTeams()}`);

console.log(`\n===== OCTAVOS DE FINAL =====\n`)

console.log(`\n===== CUARTOS DE FINAL =====\n`)

console.log(`\n===== SEMIFINALES =====\n`)

console.log(`\n===== FINAL =====\n`)

console.log(`\n\n=================================================`)
console.log(`¡España campeón del mundo!`)
console.log(`=================================================\n`)

