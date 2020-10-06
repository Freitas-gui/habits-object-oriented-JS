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
        if (! Number.isInteger(matter))
            throw Error("Property should be type integer.")
        else if(matter > 5)
            throw Error("Property should be smaller than 5.")
        else if (matter < 0)
            throw Error("Property should be greater than 0.")
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