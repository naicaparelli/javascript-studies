// Crie uma funcao para escvrever o nome
// Crie uma funcao para validar a idade



function sayMyName () {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout

      });

    readline.question(`What's your name? \n`, name => {
    console.log(`Welcome ${name}`);
    readline.close();

    });

}

sayMyName();



