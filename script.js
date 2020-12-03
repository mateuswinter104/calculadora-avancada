//variaveis de escopo global
var num1 = "", num2 = "", op = "";

function teclarSom() {
    var bip = document.getElementById('bip');

    bip.volume = 1;
    bip.play();

}

function pegarValorTecla(valor) {
    //reproduz o som da tecla
    teclarSom();

    //verifica se o operador  tem valor
    if (op == "") {
        num1 = num1 + valor;
        atualizarDisplay(num1);
    } else {
        num2 = num2 + valor;
        atualizarDisplay(num2);
    }


}

function pegarOperador(sinal) {
    teclarSom();

    if (num1 != "") {

        if(num2 == "") {
            op = sinal;
            atualizarDisplay(num1 + sinal);

        }else{
            calcular();
        }
    }
}

function calcular() {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var resultado = "";

    if(op == "+"){
        resultado = num1 + num2;
    } else if(op == "-"){
        resultado = num1 - num2;
    }else if(op == "*"){
        resultado = num1 * num2;
    }else if(op == "/"){
        resultado = num1 / num2;
    }else if(op == "%"){
        //resultado = 
    }
    atualizarDisplay(resultado);
    limpar();

}

function atualizarDisplay() {
    document.getElementById("display").innerHTML = "0";
}

function limpar() {
    teclarSom();
    atualizarDisplay(0);

    num1 = "";
    num2 = "";
    op = "";
}