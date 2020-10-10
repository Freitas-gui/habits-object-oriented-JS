import { List } from "./List.js"
import { Validations } from "./validations.js"

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
}