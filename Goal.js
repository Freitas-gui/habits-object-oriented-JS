import { Validations } from "./validations.js"

export class Goal{
    constructor(time, amount){
        Validations.isInteger(time)
        Validations.smallerThan(time,0)
        Validations.smallerThan(amount,0)
        
        this._time = time
        this._amount = amount
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
}