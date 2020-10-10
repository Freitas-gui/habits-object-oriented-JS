import { Goal } from "./Goal.js"
import { Habit } from "./Habit.js"
import {Objective} from "./Objective.js"

const goalIngles = new Goal("Falar ingles fluente", "Para viajar o mundo, podendo conversar com pessoas. Além de interagir com conteúdo de + qualidade", 4, 2023, 15)
const goal2 = new Goal("nana", "creue", 5, 13, 3)

const habitTeste = new Habit("lala", "trigger", "routine", "reward", 0)

goalIngles.habit.Add("habitTeste222")
goalIngles.habit.Add("habitTeste")

console.log(Object.getPrototypeOf(goalIngles) === Object.getPrototypeOf(goal2))


