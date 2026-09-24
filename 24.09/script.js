//---------- array (lista)-------
//  let nome1 = "levi"
//  let nome2 = "duda"
//  let nome3 = "gustavo"
//  let nome4 = "bernardo"

//  //            0       1        2          3
//  let nomes= ["levi", "duda", "gustavo","bernardo"]; // criação do array/lista

//  console.log(nomes); // mostra a lista completa na mesma linha 

// console.log(nomes[1]) // mostra o item da posição mencionada entre colchetes 
  
// nome4 = "ana";
// nomes [3]; "ana" ; // altero o valor na posição especificada

// console.log(nomes.length); // mostra o tamanho do array 


// let frutas =["maça","banana","maracuja","jaca","kiwi"];
// console.log(frutas[0]);
// console.log(frutas[2]);

// console.log(frutas.length);

// let cidades = ["rio de janeiro","são paulo","porto alegre","goiana","recife"]
// console.log(cidades);
// cidades[1]= "goiania";
// console.log(cidades[1])
// console.log(cidades.length);

//-------  ARRAY ----------+ ESTRUTURADE REPETIÇÃO
//let cidades = ["são paulo","santo andré","são caetano", "maua","pindamonhagada","salvador"]

// console.log(cidades[0]);
// console.log(cidades[1]);
// console.log(cidades [2]);
// console.log(cidades[3]);
// console.log(cidades[4]);

// for (let index = 0; index < 5 ; index++) {
//     console.log(cidades[index]);
    
// }

// for (let index = 0; index < cidades.length; index++) {
//     console.log(cidades[index]);
   
// }


// let nomes = ["ana","maria","sophia","ravi","lucas","leoandro"]
// console.log(nomes)

// let precos =[10,34,45,67,100];

// for (let index = 0; index < precos.length; index++) {
//      console.log(precos[index]); 
// }

// let produtos = ["rimel" , "danone" , "leite" , "base"  , "iluminador"]
// let precos = [15,27,14,15,25]
// for (let index = 0; index <produtos.length; index++) {
//     console.log(  produtos[index] , precos[index])

// }

// ----------- ESTRUTURA DE REPETIÇÃO +ESTRUTURA DE DECISÃO--------
// let numeros = [5,9,35,24, 56,67,89,90,34,55];

// for (let index = 0; index < numeros.length ; index++) { // contando de 0 a 10 
 
//     if (numeros[index]>= 10) { // verificando se é maoir ou igual a 5
//         console.log(numeros[index]); // mostra o numero
//     }    
// }


// let numeros = [5,9,35,24, 56,67,89,90,34,55];

// for (let index = 0; index < numeros.length ; index++) { // lendo o array
//        let sobra  = numeros[index] % 2;
     
             
//           if (sobra==0) {
//            console.log( "o numero "+ numeros [index]+ " é par ");
//          } else {
//             console.log(" o numero " + numeros[index] +" é impar " );

//          }

// }


// let notas=[10,9,8,6,2,7,5,4];
// for (let index = 0; index < notas.length; index++) {

//     if (nota [index ] >= 7 ) {
//         console.log(" aprovado "+notas [index])
        
//     } else { 
//      console.log(" reprovado "+ notas[index])
        
//     }
    
    
// }


let temperaturas =[15,29,30,35,12,26,25]

for (let index = 0; index < temperaturas .length; index++) {
    if (temperaturas [index]>30) {
        console.log(" quente "+ temperaturas [index]) 

    } else if (temperaturas [index] >=20 && temperaturas <= 30) {
        console.log(" agradavel "+ temperaturas[index])

    } 
     else 
        console.log(" frio "+ temperaturas [index] )
}
     








