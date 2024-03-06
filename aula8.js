// // Crie uma classe para representar Pessoas.Crie
// // Para cada pessoa teremos os atributos nome, peso e altura
// // As pessoas devem ser capazes de calcular seu IMC (peso/(altura * altura)).
// // Instancie uma pessoa chamada Jose com 70kg 1,75 altura e calcule seu IMC.


// class Pessoa {
//     nome;
//     peso;
//     altura;

//     constructor(nome, peso, altura){
//         this.nome = nome;
//         this.peso = peso;
//         this.altura = altura;
//     }

//     calculoIMC (){
//         return this.peso / (this.altura * this.altura);
//     }

//     classificarIMC () {
//        const imc = this.calculoIMC();

//         if (imc < 18.5) {
//                 return ('está abaixo do peso.')
//           } else if (imc >= 18.5 && imc < 25) {
//                 return ('está com o peso normal.')
//           } else if (imc >= 25 && imc < 30) {
//                 return ('está acima do peso.')
//           } else if (imc >= 30 && imc < 40) {
//                 return ('está com obesidade.')
//           } else {
//                 return ('está com obesidade grave')
//           } 
//     }
// }

// const jose = new Pessoa('José', 70, 1.75)
// const eduardo = new Pessoa('Eduardo', 90, 1.90)

// console.log(`O IMC do ${eduardo.nome} é: ${eduardo.calculoIMC()} e ele(a) ${eduardo.classificarIMC()}`);

const dev = {
    nome: 'Renan',
    linguagemPreferida: 'JavaScript'
};

console.log(dev.linguagemPreferida);