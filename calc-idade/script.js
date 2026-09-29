// pegar os elementos no html

const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");
const nascimento = document.getElementById("nascimento");

formulario.addEventListener("submit", function(event){
    event.preventDefault();// impede que a tela recarregue

    // pegar o valor dos inputs
    const valorNome = nome.value;
    const  valorNascimento = nascimento.value; 

    // console.log(valorNome) ;
    // console.log(valorNascimento);

    // separa a data em 3 valores
    const dataSeparada = valorNascimento.split("-");

    console.log(dataSeparada);
})