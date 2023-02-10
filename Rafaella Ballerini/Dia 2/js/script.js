let nome = '';
let idade = 0;
let linguagem = '';
opcao = '';

function start(){
     nome = prompt('Insira o seu Nome:');
     idade = prompt('Insira a sua Idade:');
     linguagem = prompt('Insira sua linguagem de programação preferida:');

     console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

     opcao = prompt(`Você gosta de estudar a linguagem ${linguagem}`);

     if (String(opcao).toLowerCase == 'n'){
        console.log('Ahh que pena... Já tentou aprender outras linguagens?');
     } else {
        console.log('Muito bom! Continue estudando e você terá muito sucesso.');
     }



}

start();