import { Goal } from "./Goal.js"
import {Objective} from "./Objective.js"

const goalIngles = new Goal("Falar ingles fluente", "Para viajar o mundo, podendo conversar com pessoas. Além de interagir com conteúdo de + qualidade", 4, 2023, 15)
const goal2 = new Goal("nana", "creue", 5, 13, 3)

goalIngles.why = "ok"

console.log(goalIngles.objective)
console.log(goal2.objective)
