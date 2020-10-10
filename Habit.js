import { Validations } from "./validations.js"

export class Habit{
    constructor(name, trigger, routine, reward, good){
        Validations.isString(name)
        Validations.isString(trigger)
        Validations.isString(routine)
        Validations.isString(reward)
        Validations.isBool(good)
        this._name = name
        this._trigger = trigger 
        this._routine = routine
        this._reward = reward
        this._good = good
    }

    get name(){
        return this._name
    }
    set name(name){
        Validations.isString(name)
        this._name = name
    }

    get triggere(){
        return this._trigger
    }
    set trigger(trigger){
        Validations.isString(trigger)
        this._trigger = trigger
    }

    get routine(){
        return this._routine
    }
    set routine(routine){
        Validations.isString(routine)
        this._routine = routine
    }

    get reward(){
        return this._reward
    }
    set reward(reward){
        Validations.isString(reward)
        this._reward = reward
    }

    get good(){
        return this._good
    }
}