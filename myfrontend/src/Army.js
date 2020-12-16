export default class Army
{
    constructor(type)
    {
        this.type=type;
        this.soldiers=[];
    }
    add_soldier(soldier)
    {
        this.soldiers.push(soldier);
    }
    calculate_speed()
    {
        let speed=0;
        this.soldiers.forEach(element => {
            speed+=element.speed;
        });
        return speed/10;
    }
    calculate_defense()
    {
        let defense=0;
        this.soldiers.forEach(element=>
        {
            defense+=element.defense;
        });
        return defense/10;
    }
    calculate_accurece()
    {
        let accurece=0;
        this.soldiers.forEach(element=>
        {
            accurece+=element.accurace;
        });
        return accurece/10;
    }
    calculate_death()
    {
        let death=0;
        this.soldiers.forEach(element=>
        {
            death+=element.death;
        });  
        return death/10;
    }
    
    
}