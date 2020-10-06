export class Goal{
    constructor(time, amount){
        this._time = time
        this._amount = amount
    }

    get time(){
        return this._time
    }
    set time(time){
        if (! Number.isInteger(matter))
            throw Error("Property should be type integer.")
        else if (matter < 0)
            throw Error("Property should be greater than 0.")
        this._time = time
    }

    get amount(){
        return this._amount
    }
    set amount(amount){
        if (amount < 0)
            throw Error("Property should be greater than 0.")
        this._amount = amount
    }
}