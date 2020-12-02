//variaveis de escopo global
var num1, num2, op;

function teclarSom(){
    var bip = document.getElementById('bip');

    bip.volume = 1;
    bip.play();
    
}

function pegarValorTecla(valor){ 
    //reproduz o som da tecla
    teclarSom();
    //pega o valor da tecla
    document.getElementById("display").innerHTML = valor;

}

function pegarOperador(){

}

function calcular(){

}