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
        let goalsHome = this.generateGoals();
        let goalsAway = this.generateGoals();

        while(goalsHome === goalsAway) {
            goalsHome = this.generateGoals();
            goalsAway = this.generateGoals();
        }

        if(goalsHome > goalsAway){
            away.isEliminated= true;
        } else {
            home.isEliminated= true;
        }
        
        match = { 
            homeName: home.name, 
            awayName: away.name,
            goalsHome: goalsHome,
            goalsAway: goalsAway
        };
              
        return match;
        
    }

}