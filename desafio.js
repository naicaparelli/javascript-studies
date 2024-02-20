/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas
    1 - Preço do combustível;
    2 - Gasto médio de combustível do carro por KM;
    3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar a viagem.

*/

const precoEtanol = 3
const precoGasolina = 5
const kmLitro = 12
const distancia = 1580
const litrosConsumidos = distancia / kmLitro

const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
readline.question('Escolha o combustivel: ', tipoCombustivel => {
  console.log(`O tipo de combustivel escolhido foi: ${tipoCombustivel}!`)

  if (tipoCombustivel === 'Gasolina') {
    const gastoGasolina = litrosConsumidos * precoGasolina
    console.log(gastoGasolina.toFixed(2))
  } else if (tipoCombustivel === 'Etanol') {
    const gastoEtanol = litrosConsumidos * precoEtanol
    console.log(gastoEtanol.toFixed(2))
  } else {
    console.log('Voce precisa escolher Etanol ou Gasolina!')
  }

  readline.close()
})
