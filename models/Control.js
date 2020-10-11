import { List } from "../useful/List.js"
import { Validations } from "../useful/validations.js"

export class Control{
    constructor(){
        this._frequency = new List
    }

    add(item) {
        Validations.isBool(item)
        this._frequency.Add(item)
    }
    
    get frequency(){
        return this._frequency.GetCollection()
    }

    proportion(){
        var proportion = [0,0]
        for(var size = this._frequency.Count(); size>0; size--){
            var item = this._frequency.GetItem(size-1)
            if(item === true)
                proportion[1]++
            else
                proportion[0]++
        }
        return proportion
    }
}