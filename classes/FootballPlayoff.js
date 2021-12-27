import { rounds } from "../rounds.js";
import Playoff from "./Playoff.js";

export default class FootballPlayoff extends  Playoff{
    constructor (name, teams, config = {}) {
        super(name, teams ,config);

    }

    generateGoals(){
        return Math.floor(Math.random() * 10);
    }



    play(home, away){
        let match;
        let homeGoals = this.generateGoals();
        let awayGoals = this.generateGoals();

        while(homeGoals === awayGoals) {
            homeGoals = this.generateGoals();
            awayGoals = this.generateGoals();
        }

        homeGoals > awayGoals ? away.isEliminated= true : home.isEliminated= true;
        
        
        match = { 
            homeName: home.name, 
            awayName: away.name,
            homeGoals: homeGoals,
            awayGoals: awayGoals
        };
              
        return match;
        
    }

}