// 1 - Crie uma clase para representar carros.
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
// Crie um metodo que dado a quantidade de quilometros e o preco do combustivel nos de o valor gasto em reais para realizar o percurso.

class Carros {
    marca; //atributos
    cor;
    kmLitro;

    constructor(marca, cor, kmLitro){
        this.marca = marca; //this. só eh usando para se referir a um atributo da classe, a distancia eh um parametro para um metodo, entao eu recebo de
        this.cor = cor;
        this.kmLitro = kmLitro;      
    } 

    calcularGastoPercurso(distancia, precoCombustivel){
        return (distancia / this.kmLitro) * precoCombustivel;
    }

}

const bmw = new Carros('BMW','Azul', 12);
console.log(bmw.calcularGastoPercurso(70,5))
