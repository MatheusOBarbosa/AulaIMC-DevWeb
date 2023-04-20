console.log(resp);

function calculaIMC() {
    let peso, altura, resp, classific;
    peso = parseFloat(document.getElementById("edtPeso").value);
    altura = parseFloat(document.getElementById("edtAltura").value);
    
    resp = peso / (altura * altura);

    if(resp <= 18.5) {
        classific = " abaixo do peso"
    } else if (resp <= 24.9) {
        classific = " peso ideal"
    } else if (resp <= 29.9) {
        classific = " levemente acima do peso"
    } else if (resp <= 34.9) {
        classific = " Obesidade Grau I"
    } else if (resp <= 39.9) {
        classific = " Obesidade Grau II (severa)"
    } else if (resp >= 40) {
        classific = " Obesidade Grau III (morbida)"
    }

    document.getElementById("resp").innerText = "Resposta da IMC: " + resp + " e a classificação é" + classific;
}