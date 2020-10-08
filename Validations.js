export class Validations{

    //Start Is some thing
    static isInteger(property){
        if (! Number.isInteger(property))
            throw Error("Property should be integer type.")
        return true
    }

    static isString(property){
        if( !(typeof property === 'string'))
            throw Error("Property should be string type.")
        return true
    }

    static isBool(property){
        if(property != 0 && property != 1)
            throw Error("Property should be boolean type.")
        return true
    }
    //End Is some thing

    //Start Comparation
    static greaterThan(smaller, greater){
        if (smaller > greater)
            throw Error(`Property can't be smaller than ${greater}.`)
        return true
    }

    static smallerThan(greater, smaller){
        if (greater < smaller)
            throw Error(`Property can't be greater than ${smaller}.`)
        return true
    }
    //End Comparation
}