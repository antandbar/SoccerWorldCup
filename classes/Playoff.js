import { setupArrays } from '../utils/index.js';
import {rounds} from '../rounds.js';



export default class Playoff {
    constructor(name, teams) {
        setupArrays();
        this.roundResult = [];
        this.teams = this.setupTeams(teams);
        this.getEighthsfinal();

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

    getEighthsfinal () {
        if (this.teams.length !== rounds.eighthsfinal) {
            throw new Error('The quarterfinals must have 16 teams')
        }

        for(let i=0; i < this.teams.length; i+=2) {
            this.roundResult.push(this.play(this.teams[i], this.teams[i+1]));    
        }
        return this.roundResult;
   
    }


}