/* O IMC - Índice de Massa Corporal é um critério da Organizacão Mundial de Saúde para dar uma indicacão sobre a condicão de peso de uma pessoa adulta.
Fórmula do IMC:
    IMC = peso / (altura * altura)
    Elabore uma calculadora dado o peso e a altura de um adulto e exiba a condicão conforme a tabela abaixo:
     - Abaixo de 18.5 - Abaixo do peso;
     - Entre 18.5 e 25 - Peso normal;
     - Entre 25 e 30 - Acima do peso;
     - Entre 30 e 40 - Obeso;
     - Acima de 40 - Obesidade grave;
*/

const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Qual seu peso?', pesoUsuario => {
    const peso = parseFloat(pesoUsuario); // Converte a resposta em número
    readline.question('Qual sua altura?', alturaUsuario => {
      const altura = parseFloat(alturaUsuario); // Converte a resposta em número
        
        const imc = peso / (altura * altura);
        
        console.log(`Seu IMC é: ${imc}`);

    if (imc < 18.5) {
      console.log('Você está abaixo do peso.')
    } else if (imc >= 18.5 && imc < 25) {
      console.log('Você está com o peso normal.')
    } else if (imc >= 25 && imc < 30) {
        console.log('Você está acima do peso.')
    } else if (imc >= 30 && imc < 40) {
        console.log('Você está com obesidade.')
    } else {
      console.log('Você está com obesidade grave')
    }

    readline.close()
});
});