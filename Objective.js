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
        if( !(typeof why === 'string'))
            throw Error("Property should be type string.")
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
            throw Error("Property should be smaller than 5.")
        this._matter = matter
    }

    get check(){
        return this._check
    }
    set check(bool){
        if(bool != 0 && bool != 1)
            throw Error("Property should be boolean.")
        this._check = bool
    }
}