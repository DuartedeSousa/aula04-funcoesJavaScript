//Funções em JS
//Uma função é uma função de um bloco de código reutilizável, criado para executar uma tarefa específica

//Estrutura:
//function nomeDaFuncao (parametro1, parametro2) {
    //código que será executado
//return resultado;
//}

console.log("");

//Exemplo:
function somar (a, b) {
    return a + b;
}
somar(2,3);
console.log(somar(2,3)); //5
console.log("");

//Exemplo02:
function realParaDolar(valorReal, cotacao){
    return valorReal/cotacao;
}
console.log(realParaDolar(20,5.17).toFixed(2)); //Fixar o número de casas após a vírgula
console.log("");

//Exemplo03:
function calcularAumento(salario){
    return salario + (salario * 0.25);
}
console.log(calcularAumento(10000)); 

console.log("");
console.log("");

//########## FOR ################
//O for é usado quando queremos repetir um trecho de código várias vezes, geralmente sabendo *** QUANTAS VEZES *** ele deve se repetir

// for (início, condição, incremento) {
     //código que será repetido
// }

//início ---> onde começa
//condição --> até quando repete
//incremento --> como o valor muda a cada volta

// for (let i=1; i <= 5; i ++){
//     console.log(1);
// }

//Ex:
function contar(){
    for (let i=1; i<=10; i++){
        console.log(i);
    }
}
contar(); //Play