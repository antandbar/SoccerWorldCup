import Playoff from "./Playoff.js";

export default class FootballPlayoff extends  Playoff{
    constructor (playoffName, teamsName) {
        super(playoffName, teamsName);
    }
// Devuelve el nombre del Playoff
    getPlayoffName() {
        return this.playoffName;
    }
// Se generan goles aleatoriamente
    generateGoals() {
        return Math.floor(Math.random() * 10);
    }
// Se juegan los partidos, solo puede ganar uno de los Teams
    play(home, away) {
        let match;
        let homeGoals = this.generateGoals();
        let awayGoals = this.generateGoals();

        while(homeGoals === awayGoals) {
            homeGoals = this.generateGoals();
            awayGoals = this.generateGoals();
        }
        homeGoals > awayGoals ? away.isEliminated = true : home.isEliminated = true;
        
        match = { 
            homeName: home.name, 
            awayName: away.name,
            homeGoals: homeGoals,
            awayGoals: awayGoals
        };
        return match;
    }
}