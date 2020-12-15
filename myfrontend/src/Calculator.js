class Calculator
{
    constructor(armyAttack,armyDefense,weather,terrain)
    {
        this.armyAttack=armyAttack;
        this.armyDefense=armyDefense;
        this.weather=weather;
        this.terrain=terrain;
    }
    calculateArmyAttackChance()
    {
        let chances=0;
        let report1=(this.armyAttack.calculate_speed()*this.weather.speedLoss*this.terrain.accurace*this.terrain.speed*this.armyAttack.calculate_accurece())/this.armyAttack.calculate_death();
        let report2=(this.armyDefense.calculate_defense()*this.weather.defenceLoss*this.terrain.accurace*this.terrain.defence*this.armyDefense.calculate_accurece())/this.armyDefense.calculate_death();
        chances=report1*(1/report2)*1.5;
        return chances;
    }
    calculateArmyDefenceChance()
    {
        let chances=0;
        let report1=(this.armyAttack.calculate_speed()*this.weather.speedLoss*this.terrain.accurace*this.terrain.speed*this.armyAttack.calculate_accurece())/this.armyAttack.calculate_death();
        let report2=(this.armyDefense.calculate_defense()*this.weather.defenceLoss*this.terrain.accurace*this.terrain.defence*this.armyDefense.calculate_accurece())/this.armyDefense.calculate_death();
        chances=report1*(1/report2)*1.3;
        return chances;
    }  
    calculateArmyAttackDeaths()
    {
        return 0;
    } 
    calculateArmyDefenceDeaths()
    {
        return 0;
    }
}