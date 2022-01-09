import { setupArrays } from '../utils/index.js';
import { rounds, roundsName } from '../rounds.js';

export default class Playoff {
    constructor(playoffName, teamsName) {
        this.playoffName = playoffName;
        this.round = [];
        this.roundResult = [];
        this.thirdQuarterTeams = [];
        setupArrays();
        this.teams = this.setupTeams(teamsName);
    }
// Se ordenan aleatoriamente los TeamsName y se setea a un objeto literal
    setupTeams(teamsName) {
        let auxTeams = [];
        teamsName.shuffle();
        for (let teamName of teamsName) {
            auxTeams.push(this.customizeTeam(teamName));
        }        
        return auxTeams;
    }
// Seteo a objeto literal
    customizeTeam(teamName) {
        return {
            name: teamName,
            isEliminated: false
        }
    }
// Devuelve los nombres de Teams ordenados aleatoriamente 
    getTeams() {
        return this.teams.map(team => team.name)
    }
// Este método es implemnetado en la clase hija
    getPlayoffName() {
        throw new Error('getPlayoffName method must be implemented at child class')
    }
// Este método es implemnetado en la clase hija
    play(home, away) {
        throw new Error('Play method must be implemented at child class')
    }
// Crea un objeto literal donde guarda nombre de la ronda y resultados de la ronda
    createRound(roundResult, roundsName) {
        let roundObject = {
            roundName: roundsName,
            roundResult: roundResult.map(match=>match)
        }
        return roundObject
    }
// Guarda resultado de los partidos por ronda, también para 3º y 4º puesto
    nextRound(roundName) {
        if (roundName === roundsName.thirdQuarter) {
            this.roundResult.push(this.play(this.thirdQuarterTeams[0], this.thirdQuarterTeams[1])); 
            this.round.push(this.createRound(this.roundResult, roundName));
            this.roundResult = [];
            
            return this.round;
        } else {
            for(let i=0; i < this.teams.length; i+=2) {
                this.roundResult.push(this.play(this.teams[i], this.teams[i+1]));  
            }
            if(roundName === roundsName.semifinal) this.thirdQuarterTeams = this.teams.filter(team => team.isEliminated);
            this.teams = this.teams.filter(team => !team.isEliminated); 
            this.round.push(this.createRound(this.roundResult, roundName));
            this.roundResult = [];

            return this.round;
        }
    }
// Devuelve campeón del PlayOff
    getChampion() {
        const champion = this.teams.filter(team => !team.isEliminated);
        if (champion.length !== 1) throw new Error('getChamplion method must be executed after method start')
        
        return champion[0].name;
    }
// Metodo que ejecuta el PlayOff
    start() {
        if (this.teams.length !== rounds.eighthsfinal) throw new Error('The Playoff must have 16 teams') 
        this.nextRound(roundsName.eighthsfinal);
        this.nextRound(roundsName.quarterfinal);
        this.nextRound(roundsName.semifinal);
        this.nextRound(roundsName.thirdQuarter);
        this.nextRound(roundsName.final);

        return this.round
    }
}