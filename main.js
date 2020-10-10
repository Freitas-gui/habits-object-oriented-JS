import { Goal } from "./Goal.js"
import { Habit } from "./Habit.js"
import {Objective} from "./Objective.js"

const goalIngles = new Goal("Falar ingles fluente", "Para viajar o mundo, podendo conversar com pessoas. Além de interagir com conteúdo de + qualidade", 4, 2023, 15)
const goal2 = new Goal("nana", "creue", 5, 13, 3)

const habitTeste = new Habit("lala", "trigger", "routine", "reward", 0)
const habitTesteeee = new Habit("aaaa", "bbbb", "cccc", "dddd", 1)

goalIngles.habit.Add("um")
goalIngles.habit.Add("dois")
goalIngles.habit.Insert(1,3)

console.log(goalIngles.habit.GetItem(0))
console.log(goalIngles.habit.GetItem(1))
console.log(goalIngles.habit.GetItem(2))


