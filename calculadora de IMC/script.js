      // Selecionar os elementos do HTML//
       const formulario = document.getElementById("formulario");

       const nome = document.getElementById("nome");
       const peso = document.getElementById("peso");
       const altura = document.getElementById("altura");

    
       const nomeResultado =document.getElementById("nomeResultado");
       const pesoResultado =document.getElementById("pesoResultado");
       const alturaResultado =document.getElementById("alturaResultado");
       const boxResultado = document.getElementById("resultado");
       const classificacao1 = document.getElementById("classificacao");
       const imc= document.getElementById("imcResultado");
         // capturar o evento de envio do formulario// 
  
           formulario.addEventListener("submit", function(event){
            event.preventDefault();// impede que a tela recarregue

            // pegar o valor dos inputs
            const valorNome = nome.value;
            const  valorpeso = peso.value; 
            const  valoraltura = altura.value;

         const valorPeso = Number(valorpeso);
         const  valorAltura = Number(valoraltura); 
         // console.log(valorpeso) ;
         //console.log(valoraltura);


         let IMC = valoraltura * valoraltura
         let IMC1 = valorpeso / (IMC) 
         let classificacao = ""
         console.log(IMC1);

         if (IMC1 < 18.5) {
            classificacao = "abaixo do peso ";
            
         }
         else if ( IMC1 >= 18.5 && IMC1 == 24.9){
            classificacao = "peso normal";
         } 
         else if (IMC1 >=25.0 && IMC1 <= 29.9){
            classificacao = "sobrepeso";

         } 
          else if (IMC1 >= 30.0 &&  IMC1 <= 34.9) {
               classificacao = "obesidade grau 1";
          }
           else if (IMC1>= 35.0 && IMC1 <= 39.0){
             classificacao = "obesidade grau 2";
           }
             else {
                classificacao = "obesidade grau 3"
             }  


             nomeResultado.textContent= valorNome
             nomeResultado.textContent = valorpeso 
             nomeResultado.textContent = valorAltura
             imc.textContent= IMC1 .toFixed(2);
             classificacao1.textContent= classificacao
             boxResultado.style.display= "block"
             
             










            
        })

           

       
       
      