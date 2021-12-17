import League from "./League.js";

export default class FootballLeague extends League {
    constructor(name, teams, config = {}){
        super(name, teams, config)
    }

    setup(config = {}){
        const defaultConfig = {
            rounds: 1,
            pointsPerWin: 3, 
            pointsPerDraw: 1, 
            pointsPerLose: 0, 
        }
        this.config = Object.assign(defaultConfig, config);
    }

    customizeTeam(teamName){
        // usamos super.customizeTeam para ejecutar el código de customizeTeam de la clase "padre"
        const customizedTeam = super.customizeTeam(teamName)
        // usamos spread operator para esparcir los valore de customizedTeam en nuestro nuevo objeto team
        return {
            ...customizedTeam,
            points: 0,
            goalsFor: 0,
            goalsAgainst: 0
        }
    }
}