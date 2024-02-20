/* Faça um programa que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua media e classificacao conforme a tabela abaixo:

Classificacao:
    1 - Media menor que 5, reprovacao;
    2 - Media entre 5 e 7, recuperacao;
    3 - Media maior que 7, aprovado;
    
*/


const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite sua nota do primeiro trimestre: ', primeiroTrimestre => {
    const nota1 = parseFloat(primeiroTrimestre); // Converte a resposta em número
    readline.question('Digite sua nota do segundo trimestre: ', segundoTrimestre => {
      const nota2 = parseFloat(segundoTrimestre); // Converte a resposta em número
      readline.question('Digite sua nota do terceiro trimestre: ', terceiroTrimestre => {
        const nota3 = parseFloat(terceiroTrimestre); // Converte a resposta em número
        
        const mediaNotas = (nota1 + nota2 + nota3) / 3;
        
        console.log(`Sua média é: ${mediaNotas}`);

    if (mediaNotas < 5) {
      console.log('Voce reprovou')
    } else if (mediaNotas >= 5 && mediaNotas <= 7) {
      console.log('Voce ficou de recuperacao')
    } else {
      console.log('Voce foi aprovado')
    }
  
    readline.close()
});
});
});