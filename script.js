//let data = new Date()
//document.write(data)

let data1 = new Date()
document.write(data1.toLocaleDateString());
document.write('<br><br>')
function ligar(){
    var btnLigar = document.getElementById("ligar");
    btnLigar.disabled = true;


var btnDesligar = document.getElementById("desligar");
btnDesligar.disabled = false;


var dataDisplay = document.getElementById("data");


var dataAtual = new Date();

// Exibe a data atual na área de exibição
dataDisplay.innerHTML = "Data: " + dataAtual.toDateString();
}

// Função chamada quando o botão "desligar" é clicado
function desligar(){
// Obtém a referência para o botão "ligar" e o habilita
var btnLigar = document.getElementById("ligar");
btnLigar.disabled = false;

// Obtém a referência para o botão "desligar" e o desabilita
var btnDesligar = document.getElementById("desligar");
btnDesligar.disabled = true;

// Obtém a referência para a área de exibição da data
var dataDisplay = document.getElementById("data");

// Limpa a área de exibição da data
dataDisplay.innerHTML = "";
}
function validar(){

    /* declarando as variáveis*/
    let usuario =document.getElementById("usuario").value
    let senha = document.getElementById("senha").value
    let email =document.getElementById('email').value
    let telefone = document.getElementById('telefone').value



    if(usuario =="" && senha ==""){
        alert('preencha os campos')
    }else{
        alert('Acesso Permitido')

        window.open('index.html');
        }
}
if(telefone =="" && email ==""){
    alert('por favor insira seu telefone e email')
}else{
    alert('Acesso Permitido')

    window.open('index.html');
}
function trocar(cor){
    trocar.getElementById(cor)
    document.body.style.background = cor
}  
