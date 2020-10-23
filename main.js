import { createRequire } from 'module'
const require = createRequire(import.meta.url)

import { Goal } from "./models/Goal.js"
import { Habit } from "./models/Habit.js"
import {Control} from "./models/Control.js"

const goalIngles = new Goal("Falar ingles fluente", "Para viajar o mundo, podendo conversar com pessoas. Além de interagir com conteúdo de + qualidade", 4, 2023, 15)


const habitAlura = new Habit("Fazer cursos da Alura Linguas", "Despertador toca 20 horas", "Abrir o site, pegar o caderno e estudar", "Ir dormir com a mente mais leve e com mais sono", 1)
const habitConversarZap = new Habit("Conversar com amigos em ingles via whatsapp", "Mensagem ingles no celular n respondida, tempo livre", "entender a mensagem e responder de preferencia via audio", "Reforsar laços de amizade e treinar listen and say", 1)

goalIngles.habit.Add(habitAlura)
goalIngles.habit.Add(habitConversarZap)

const control = new Control()
control.add(false)
control.add(true)
control.add(false)

const prompt = require('prompt');

