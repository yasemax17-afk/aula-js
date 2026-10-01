// pegar os elementos no html
const formulario = document.getElementById("formulario");


const nome = document.getElementById("nome");
const nascimento = document.getElementById("nascimento");

const nomeResultado =document.getElementById("nomeResultado");
const dataResultado =document.getElementById("dataResultado");
const idadeResultado =document.getElementById("idadeResultado");
const boxResultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event){
    event.preventDefault();// impede que a tela recarregue

    // pegar o valor dos inputs
    const valorNome = nome.value;
    const  valorNascimento = nascimento.value; 

    // console.log(valorNome) ;
    // console.log(valorNascimento);

    // separa a data em 3 valores
    const dataSeparada = valorNascimento.split("-");

    // console.log(dataSeparada);

    // armazena as datas separadas em formato numerico
      const anoNascimento =  Number(dataSeparada[0]);
      const mesNascimento =  Number(dataSeparada[1]);
      const diaNascimento  =  Number(dataSeparada[2]);

      // console.log(anoNascimento); 

     // pega a data de hoje do sistema
      const hoje = new Date();
      const  anoAtual = hoje.getFullYear();// pega somente o ano
      const mesAtual =  hoje.getMonth()+1; // pega somente o mes 
      const diaAtual = hoje.getDate(); // pega somente o dia 

    //   console.log(hoje);
    //   console.log(anoAtual);
    //   console.log(mesAtual);
    //   console.log(diaAtual);

    let idade = anoAtual - anoNascimento; // calcula a idade utilizando o ano 

    

   if (mesNascimento > mesAtual) { // veritica se o mes do nascimento e maior que o mes atual 
     idade = idade -1;// pega a idade e subtral 1

   }

   if (diaNascimento > diaAtual && mesNascimento > mesAtual) {//verifica se o mes de nascimento e IGUAL ao mes atual// verifica se o dia de nascimento e maior que o dia atual 
    idade = idade;//pega a idade e subtral 1 

   }
  // console.log(idade); 

          //  montando a data no formato dd/mm/aaa
   const dataformatada = diaNascimento + "/" + mesNascimento + "/" + anoNascimento;

       // inserindo os valores nos elementos HTML
  nomeResultado.textContent = valorNome;
  dataResultado.textContent = dataformatada;
  idadeResultado.textContent = idade ; 

       //    exibindo o elemento com as informações 
  boxResultado.style.display = "block" ;
   



})  
