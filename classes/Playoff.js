import { setupArrays } from '../utils/index.js';



export default class Playoff {
    constructor(teams) {
        setupArrays();
        this.teams = this.randomTeams(teams);
    }
    
    randomTeams(teams) {
        return teams.shuffle();
    }

    getTeams () {
        return this.teams;
    }

}