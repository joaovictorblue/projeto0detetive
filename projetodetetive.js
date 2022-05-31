const prompt = require('prompt-sync')()

let quantidadeSim = 0

const perguntas = [
  'Você esteve com vitima?',
  'Você teve contato com a vitima?',
  'Você falou com a vitima?',
  'Você sicutiu com a vítima?',
  'Vocês se agrediram fisicamente?'
]

console.log(
  'Houve um crime, e você será iinterrogado. Detetive encontra vitima assassinada com uma pessoa proximo ao local'
)
console.log()
console.log('Responda as perguntas que farei a você com, S para sim, N para não')
console.log()

for (let i = 0; i <= 4; i++) {
  resposta = prompt(`${perguntas[i]}: `).toUpperCase()

  if (resposta == 'S') {
    quantidadeSim++
  } else if (resposta != 'N') {
    quantidadeSim = -1
    S
  }
}

console.log()

if (quantidadeSim >= 4) {
  console.log(`Você é CULPADO`)
} else if (quantidadeSim == 3) {
  console.log(`Você é SUSPEITO`)
} else if (quantidadeSim >= 0) {
  console.log(`Você é INOCENTE`)
} else {
  console.log(`Resposta Invalida, responda S para sim e N para Não`)
}