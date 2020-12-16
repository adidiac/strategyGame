export default class Calculator
{
    constructor(armyAttack,armyDefense,weather,terrain)
    {
        this.armyAttack=armyAttack;this.armyDefense=armyDefense;
        this.weather=weather;
        this.terrain=terrain;
        this.score1=0;
        this.score2=0;
        this.death1=0;
        this.death2=0;
        this.totalSpeed1=0;
        this.totalDefense=0;
        this.totalAccurecy1=0;
        this.totalAccurecy2=0;
    }
    calculateArmyAttackChance()
    {
        let chances=0;
        let speedAttack=this.armyAttack.calculate_speed();
        let accureceAttack=this.armyAttack.calculate_accurece();
        this.totalSpeed1=speedAttack*10;
        this.totalAccurecy1=accureceAttack*10;
        let report1=1;
        report1*=speedAttack;
        report1*=accureceAttack;
        report1*=this.weather.speedLoss;
        report1*=this.terrain.accurece;
        report1*=this.terrain.speed;
        
        report1/=this.armyAttack.calculate_death();
        let defense=this.armyDefense.calculate_defense();
        let accureceDefense=this.armyDefense.calculate_accurece();
        let report2=1;
        this.totalDefense=defense*10;
        this.totalAccurecy2=accureceDefense*10;
        report2*=defense;
        report2*=accureceDefense;
        report2*=this.weather.speedLoss;
        report2*=this.terrain.accurece;
        report2*=this.terrain.speed;
        report2/=this.armyDefense.calculate_death();
        this.death1=this.armyAttack.calculate_death()*accureceDefense*10;
        this.death2=this.armyDefense.calculate_death()*accureceAttack*10;
        console.log(report1+"What 2" +report2);
        chances=report1*(1/report2)*1.5;
        return chances;
    }
    calculateArmyDefenceChance()
    {
        let chances=0;
        let speedAttack=this.armyAttack.calculate_speed();
        let accureceAttack=this.armyAttack.calculate_accurece();
        let report1=1;
        report1*=speedAttack;
        report1*=accureceAttack;
        report1*=this.weather.speedLoss;
        report1*=this.terrain.accurece;
        report1*=this.terrain.speed;
        report1/=this.armyAttack.calculate_death();
        let defense=this.armyDefense.calculate_defense();
        let accureceDefense=this.armyDefense.calculate_accurece();
        let report2=1;
        report2*=defense;
        report2*=accureceDefense;
        report2*=this.weather.speedLoss;
        report2*=this.terrain.accurece;
        report2*=this.terrain.speed;
        report2/=this.armyDefense.calculate_death();
        chances=report1*(1/report2)*1.3;
        return chances;
    }  
}