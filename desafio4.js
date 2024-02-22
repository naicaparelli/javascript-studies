/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preco normal de etiqueta
e escolha da condicao de pagamento.
Utilize os codigos da tabela a seguir para ler qual a condicao de pagamento escolhida e efetuar o calculo adequado.

Codigo Condicao de pagamento:
- A vista Debito, 10% de desconto;
- A vista no Dinheiro ou Pix, 15% desconto;
- Em duas vezes, preco normal, sem juros;
- Acima de duas vezes, preco com juros de 10%;
*/

var precoBaseadoPagamento = function () {
  readline.question(
    'Escolha a forma de pagamento \n 1 - Pix ou Dinheiro \n 2 - Cartao de debito \n 3 - Cartao de credito em ate 2x  \n 4 - Mais de 2x \n',
    formaPagamento => {
      const pagamento = parseFloat(formaPagamento) // Converte a resposta em número

      if (pagamento === 1) {
        const precoFinal = preco - preco * 0.15
        console.log(`Apenas R$${precoFinal} no Pix ou Dinheiro`)
      } else if (pagamento === 2) {
        const precoFinal = preco - preco * 0.1
        console.log(`Apenas R$${precoFinal} no Débito`)
      } else if (pagamento === 3) {
        const precoFinal = preco
        console.log(`Apenas R$${precoFinal} em até 2x no Cartão de crédito`)
      } else if (pagamento === 4) {
        const precoFinal = preco + preco * 0.1
        console.log(`R$${precoFinal} Em mais de 2x no Cartão de crédito `)
      } else {
        console.log('Escolha uma forma de pagamento válida')
        precoBaseadoPagamento()
      }

      readline.close()
    }
  )
}

const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('Qual seu preco? \n', precoEtiqueta => {
  const preco = parseFloat(precoEtiqueta) // Converte a resposta em número
  precoBaseadoPagamento()
})
