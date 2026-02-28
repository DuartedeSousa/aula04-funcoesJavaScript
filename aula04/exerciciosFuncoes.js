//1.Crie uma função que receba um número e retorne o dobro.
console.log(" ");

function dobro (valor){
    return valor * 2;
}
console.log(dobro(15)); 
console.log(" ");
//--------------------------------------------------------
//2.Crie uma função que receba um número e retorne o triplo. 
function triplo (valor){
    return valor * 3;
}
console.log(triplo(15)); 
console.log(" ");
//--------------------------------------------------------
//3.Crie uma função que receba dois números e retorne a soma.  
function soma (x, y) {
    return x + y;
}
console.log(soma(20,3)); //5
console.log("");
//--------------------------------------------------------
//4.Crie uma função que receba dois números e retorne a multiplicação. 
function multiplicacao (x, y) {
    return x * y;
}
console.log(multiplicacao(5,3));
console.log("");
//--------------------------------------------------------
//5.Crie uma função que receba um valor em real e converta para dólar.  
function dolarValor (real) {
    return real * 0.19;
}
console.log(dolarValor(5));
console.log("");
//--------------------------------------------------------
//6.Crie uma função que receba um valor em dólar e converta para real.  
function realValor (dolar) {
    return dolar * 5.18;
}
console.log(realValor(2));
console.log("");
//--------------------------------------------------------
//7.Crie uma função que receba um salário e calcule aumento de 10%.  
function aumento(salario){
    return salario + (salario * 0.1)
}
console.log(aumento(10));
console.log("");
//--------------------------------------------------------
//8.Crie uma função que retorne se o número é par.  
function parImpar (num) {
    let result = "";
    if (num % 2 == 0) {
        result = "Par";
    } else{
        result = "Ímpar"
    }

    return result;
}
console.log(parImpar(3));
console.log("");
//--------------------------------------------------------
//9.Crie uma função que imprima números de 1 até 10. 
function contagem(){
    x = 1;
    while (x < 10){
        console.log(x);
        x = x + 1;
    }

    return x;
}
console.log(contagem());
console.log("");
//--------------------------------------------------------
//10.Crie uma função que receba um limite e imprima até ele. 
function contagemII(imprimir){
    x = 1;
    while (x < imprimir){
        console.log(x);
        x = x + 1;
    }

    return x;
}
console.log(contagemII(30));
console.log("");
//--------------------------------------------------------
//11.Crie uma função que some todos os números até 10.  
function somaTotal(){
    let soma = 0;
    for(let i=1; i <= 10; i++){
        soma += i;
    }
    return soma;
}
//Volta do Laço
//1 soma = 0 + 1 =1
//2 soma = 1 + 2 =3
//3 soma = 3 + 3 =6
//10 soma = 45 + 1 =1
console.log(somaTotal());
console.log("");
//--------------------------------------------------------
//12.Crie uma função que conte quantos pares existem até 10.  
function par(numII){
    let lista = [];
    for(let i=1; i <= numII; i++){
        if (i%2 == 0){
            lista.push(i)
        }
        
    }
    console.log(`Há ${lista.length} números pares`);
    return lista;
}
console.log(par(10));
console.log("");

//--------------------------------------------------------
//13.Crie uma função que exiba a tabuada de um número.  
function tabuada(vari){
    let fixo = vari;
    for(let i=1; i <= 10; i++){
        
        vari = fixo * i
        console.log(vari);
        
    }
    return "";
}
console.log(tabuada(3));
//--------------------------------------------------------
//14.Crie uma função que faça contagem regressiva.
function regressiva(numero){
    let i = numero;
    let intervalo = setInterval(()=>{
        console.log(i);
        i--;

        if(i < 0){
            clearInterval(intervalo);
        }
    }, 1000);
    return "";
}
console.log(regressiva(10));
console.log(""); 
//Ele vai executar após as outras atividades, pois enquanto há um intervalo nesta ação, não há nas demais
//--------------------------------------------------------
//15.Crie uma função que encontre o número 27.
function procurando(resposta){
    for (let a = 0; a <= resposta; a++) {

        if (a === 27) {
            console.log("Encontrei o 27"); ///Não funciona!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        } else {
            console.log("Não encontrei...");
        }
        return;
    }
}
console.log(procurando(27))
console.log("");
//-------------------------------------------------------
// //16.Crie uma função que some números pares até um limite.
// function parII(val){
//     let listaII = [];
//     for(let i=1; i <= val; i++){
//         if (i%2 == 0){
//             listaII.push(i)
//             listaII[0] = listaII[0] + listaII[1]
//             listaII.pop();
//         }
        
//     }
//     return listaII[0];
// }
// console.log(parII(6));
// console.log(""); ///Com problema


function parSoma (total) {
    let uniao = 0;
    for(let z = 0; z <= total; z++) {

        if(z% 2===0){
            uniao += z;
        }
    }
    return uniao;
}
console.log(parSoma(10));
console.log()




















//--------------------------------------------------------
//17.Crie uma função que conte números ímpares.  
function impar(numIV){
    let listagem = [];
    for(let i=1; i <= numIV; i++){
        if (i%2 == 1){
            listagem.push(i)
        }
        
    }
    console.log(`Há ${listagem.length} números ímpares`);
    return listagem;
}
console.log(impar(7));
console.log("");
//--------------------------------------------------------
//18.Crie uma função que retorne a média de dois números.  
function media(valorA, valorB){
    media = (valorA + valorB)/2
    return media;
}
console.log(media(20,22));
console.log("");
//--------------------------------------------------------
//19.Crie uma função que retorne o quadrado de um número.  
function quadrado(valorC){
    valorD = valorC * valorC
    return valorD;
}
console.log(quadrado(3));
console.log("");