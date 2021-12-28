import { setupArrays } from '../utils/index.js';
import {rounds, roundsName} from '../rounds.js';


export default class Playoff {
    constructor(name, teams) {
        setupArrays();
        this.roundResult = [];
        this.round = [];
        this.teams = this.setupTeams(teams);
    }

    setupTeams(teams) {
        teams.shuffle();
        let auxTeams = [];
        for (let teamName of teams) {
            auxTeams.push(this.customizeTeam(teamName));
        }
        return auxTeams;
    }

    customizeTeam(teamName) {
        return {
            name: teamName,
            isEliminated: false
        }
    }

    getTeams() {
        return this.teams.map(team => team.name)
    }

    play(home, away){
        throw new Error('Play method must be implemented at child class')
    }

    createRound(roundResult, roundsName) {
        let roundObject = {
            roundName: roundsName,
            roundResult: roundResult.map(match=>match)
            //roundResult: Object.assign({}, roundResult)
        }

        return roundObject
    }

    nextRound(roundsName){
        for(let i=0; i < this.teams.length; i+=2) {
            this.roundResult.push(this.play(this.teams[i], this.teams[i+1]));  
        }
        this.teams = this.teams.filter(team => !team.isEliminated); 

        //let roundObject = {
        //    roundName: roundsName.eighthsfinal,
        //    roundResult: Object.assign({}, this.roundResult)
        //}

        this.round.push(this.createRound(this.roundResult, roundsName));
        this.roundResult = [];

        return this.round;

    }

    getChampion() {
        const champion = this.teams.filter(team => !team.isEliminated);
        if (champion.length !== 1) {
            throw new Error('getChamplion method must be executed after method start')
        }
        return champion[0].name;
    }

    start() {
        if (this.teams.length !== rounds.eighthsfinal) {
            throw new Error('The Payoff must have 16 teams')
        }
        this.nextRound(roundsName.eighthsfinal);
        
        this.nextRound(roundsName.quarterfinal);

        this.nextRound(roundsName.semifinal);

        this.nextRound(roundsName.final);

        return this.round
    }

}