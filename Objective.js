import { Validations } from "./validations.js"

export class Objective {
    constructor (name, why, matter){
        this._name = name
        this._why = why
        this._matter = matter
        this._check = 0
    }

    get name(){
        return this._name
    }

    get why(){
        return this._why
    }
    set why(why){
        Validations.isString(why)
        this._why = why
    }

    get matter(){
        return this._matter
    }
    set matter(matter){
        Validations.isInteger(matter)
        Validations.greaterThan(matter,5)
        Validations.smallerThan(matter,0)
        this._matter = matter
    }

    get check(){
        return this._check
    }
    set check(bool){
        Validations.isBool(bool)
        this._check = bool
    }
}