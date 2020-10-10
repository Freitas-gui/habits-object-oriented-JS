import { Habit } from "./Habit.js"
import { Objective } from "./Objective.js"
import { Validations } from "./validations.js"

export class Goal extends Objective{
    constructor(name, why, matter, time, amount){
        Validations.isInteger(time)
        Validations.smallerThan(time,0)
        Validations.smallerThan(amount,0)

        super(name, why, matter)
        this._time = time
        this._amount = amount
        
        this._habit = new Habit()
    }

    get time(){
        return this._time
    }
    set time(time){
        Validations.isInteger(time)
        Validations.smallerThan(time,0)
        this._time = time
    }

    get amount(){
        return this._amount
    }
    set amount(amount){
        Validations.smallerThan(amount,0)
        this._amount = amount
    }

    get objective(){
        const objective = new Objective(this._name, this._why, this._matter)
        return objective
    }

    set habit(habit){
        
        this._time = time
    }
}