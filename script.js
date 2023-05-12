//let data = new Date()
//document.write(data)
alert('bem vindo a homepage')
let data1 = new Date()
document.write(data1.toLocaleDateString());
document.write('<br><br>')
function ligar(){
    var btnLigar = document.getElementById("ligar");
    btnLigar.disabled = true;

// Obtém a referência para o botão "desligar" e o habilita
var btnDesligar = document.getElementById("desligar");
btnDesligar.disabled = false;

// Obtém a referência para a área de exibição da data
var dataDisplay = document.getElementById("data");

// Obtém a data atual
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